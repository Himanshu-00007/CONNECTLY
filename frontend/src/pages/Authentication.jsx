import { useState } from 'react';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Snackbar, Paper } from '@mui/material';
import { AuthContext } from '../contexts/AuthContext';

export default function Authentication() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [formState, setFormState] = useState(0); // 0 for login, 1 for register
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const { handleRegister, handleLogin } = React.useContext(AuthContext);

  let handleAuth = async () => {
    try {
      if (formState === 0) {
        await handleLogin(username, password);
      }
      if (formState === 1) {
        let result = await handleRegister(name, username, password);
        setMessage(result);
        setOpen(true);
        setError("");
        setFormState(0);
        setPassword("");
        setName("");
        setUsername("");
      }
    } catch (err) {
      const message = err?.response?.data?.message || 'An error occurred. Please try again.';
      setError(message);
    }
  }

  return (
<div>
    <Container component="main" maxWidth="xs">
      <Paper elevation={6} sx={{ p: 4, borderRadius: 3, mt: 8, bgcolor: '#f5f5f5' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ m: 1, bgcolor: '#1976d2', width: 56, height: 56 }}>
            <LockOutlinedIcon fontSize="medium" />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', color: '#333' }}>
            {formState === 0 ? "Welcome Back!" : "Create an Account"}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <Button
              sx={{ bgcolor: formState === 0 ? '#1976d2' : '#e0e0e0', color: formState === 0 ? 'white' : 'black' }}
              onClick={() => setFormState(0)}
            >
              Login
            </Button>
            <Button
              sx={{ bgcolor: formState === 1 ? '#1976d2' : '#e0e0e0', color: formState === 1 ? 'white' : 'black' }}
              onClick={() => setFormState(1)}
            >
              Register
            </Button>
          </Box>

          <Box component="form" noValidate sx={{ mt: 3, width: '100%' }}>
            {formState === 1 && (
              <TextField
                margin="normal"
                required
                fullWidth
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, py: 1.5, fontSize: '1rem', borderRadius: 2 }}
              onClick={handleAuth}
            >
              {formState === 1 ? "Register" : "Login"}
            </Button>
            {error && <Typography color="error" align="center">{error}</Typography>}
          </Box>
        </Box>
        <Snackbar open={open} autoHideDuration={4000} message={message} onClose={() => setOpen(false)} />
        </Paper>
       </Container>
    </div>
  );
}
