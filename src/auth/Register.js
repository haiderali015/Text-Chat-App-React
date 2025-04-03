import {
    Alert,
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
  } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  return (
    <Container
      maxWidth="md"
      sx={{ display: "flex", alignItems: "center", height: "100vh" }}
    >
        <Grid item md={6}>
          <Paper
            square
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{ p: 5 }}
              component="form"
            >
              <Typography
                variant="h5"
                sx={{ mb: 2, fontWeight: "500", textAlign:"center",textTransform: "uppercase" }}
              >
                Register here
              </Typography>
              <TextField
                fullWidth
                id="name"
                label="Name"
                variant="outlined"
                sx={{ mb: 3 }}
              />

              <TextField
                fullWidth
                id="email"
                label="Email"
                variant="outlined"
                sx={{ mb: 3 }}
              />

              <TextField
                fullWidth
                id="password"
                label="Password"
                variant="outlined"
                sx={{ mb: 3 }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ py: 2 }}
              >
                Register
              </Button>
            </Box>
            <Box sx={{ textAlign: "right", pr: 1 }}>
              <Typography variant="body2">
                Already have an account{" "}
                <Button onClick={()=>navigate("/login")}>Login</Button>
              </Typography>
            </Box>
          </Paper>
        </Grid>
    </Container>
    );
};
export default Register;
