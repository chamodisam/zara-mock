import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const isLogged = await login(email, password);
    if (isLogged) {
      // redirect to home
      navigate("/");
    }
  };

  return (
    <Container maxWidth="md" sx={{ ml: { xs: 0, md: 8 } }}>
      <Grid
        container
        component={Paper}
        elevation={0}
        sx={{ minHeight: "100vh", alignItems: "stretch" }}
      >
        {/* Left side: login form */}
        <Grid item xs={12} md={6} sx={{ p: 6 }}>
          <Typography variant="h6" gutterBottom fontWeight={500}>
            LOG IN TO YOUR ACCOUNT
          </Typography>
          <Box component="form" onSubmit={handleLogin}>
            <TextField
              label="E-MAIL"
              variant="standard"
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="PASSWORD"
              type="password"
              variant="standard"
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button
              type="submit"
              variant="outlined"
              fullWidth
              sx={{ mt: 4, mb: 2 }}
            >
              LOG IN
            </Button>

            <Typography variant="body2" sx={{ mt: 2 }}>
              HAVE YOU FORGOTTEN YOUR PASSWORD?
            </Typography>
          </Box>
        </Grid>

        {/* Right side: register prompt */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            p: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "top",
          }}
        >
          <Typography variant="subtitle1" gutterBottom>
            NEED AN ACCOUNT?
          </Typography>
          <Button
            component={Link}
            to="/signup"
            variant="outlined"
            sx={{ mt: 2 }}
          >
            REGISTER
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
