import {Box, Button, TextField, Typography} from "@mui/material"
import { useState } from "react"

export default function LoginForm() {

  const [pwd, setPwd] = useState('')
  const [email, setEmail] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if(pwd && email){
        alert("Form submitted!")
    }
    else{
        alert("Fill the credentials!")
    }
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 6,
        p: 4,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h4">
        Login
      </Typography>

      <TextField
        label="Email"
        type="email"
        fullWidth
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        label="Password"
        type="password"
        fullWidth
        onChange={(e) => setPwd(e.target.value)}
      />

      <Button
        type="submit" 
        variant="contained"
        size="large"
      >
        Sign In
      </Button>
    </Box>
  )
}