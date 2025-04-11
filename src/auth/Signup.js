import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

export default function Signup() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    agreeMarketing: false,
    agreePolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10, ml: { md: 8 } }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
        PERSONAL DETAILS
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="E-MAIL"
          variant="standard"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="PASSWORD"
          type="password"
          variant="standard"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <TextField
          label="FIRST NAME"
          variant="standard"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <TextField
          label="LAST NAME"
          variant="standard"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <Box sx={{ mt: 3 }}>
          <FormControlLabel
            control={
              <Checkbox
                name="agreeMarketing"
                checked={formData.agreeMarketing}
                onChange={handleChange}
              />
            }
            label={
              <Typography variant="body2">
                I want to receive personalised commercial communications from{" "}
                <b>ZARA</b> by email.
              </Typography>
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                name="agreePolicy"
                checked={formData.agreePolicy}
                onChange={handleChange}
                required
              />
            }
            label={
              <Typography variant="body2">
                I have read and understand the Privacy and Cookies Policy
              </Typography>
            }
          />
        </Box>

        <Button
          type="submit"
          variant="outlined"
          sx={{ mt: 4 }}
        >
          CREATE ACCOUNT
        </Button>
      </Box>
    </Container>
  );
}
