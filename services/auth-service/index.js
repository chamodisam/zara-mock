const express = require('express');
const cors = require("cors");
const fs = require('fs');
const path = require('path');
const bodyParser = require("body-parser");
const { Low } = require("lowdb");
const { JSONFile } = require("lowdb/node");

const app = express();
const PORT = 5005;

app.use(cors());
app.use(bodyParser.json());

const filePath = path.resolve(__dirname, "../../db.json");

// confirm file path
if (!fs.existsSync(filePath)) {
  throw new Error("db.json not found at " + filePath);
}

const adapter = new JSONFile(filePath);
const db = new Low(adapter, {
    clothes: [],
    carts: [],
    orders: [],
    users: []
});

async function initDB() {
  await db.read();

  if (!db.data || typeof db.data !== "object") {
    throw new Error("db.data is undefined or invalid. Check db.json format.");
  }

  db.data.users = db.data.users || [];
  await db.write();
}

initDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Auth service running at http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error("Failed to initialize database", err);
    process.exit(1); // exit if DB init fails
});

//TODO: add password hashing

app.post('/signup', async (req, res) => {
    await db.read();
    const {email, password, firstName, lastName} = req.body;

    const existingUser = db.data.users.find((user) => user.email === email);

    if (existingUser) {
        return res.status(400).json({message: "User already exists"});
    }

    db.data.users.push({ email, password, firstName, lastName});
    await db.write();
    res.status(201).json({ message: "User created successfully" });
})

app.post("/login", async (req, res) => {
    await db.read();
    const { email, password } = req.body;
    const user = db.data.users.find((user) => user.email === email && user.password === password);
  
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  
    res.status(200).json({ message: "Login successful", token: "fake-jwt-token", user: { "user_id": user.user_id } });
});

// app.listen(PORT, () => {
//     console.log(`Auth service running at http://localhost:${PORT}`);
// });
