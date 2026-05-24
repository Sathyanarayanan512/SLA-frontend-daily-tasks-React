// import React from "react"
// import ReactDOM from "react-dom/client"

// import { ThemeProvider, createTheme } from "@mui/material/styles"
// import CssBaseline from "@mui/material/CssBaseline"

// import App from "./App_Day44Task"

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#2563eb",
//     },
//     secondary: {
//       main: "#9333ea",
//     },
//   },

//   typography: {
//     fontFamily: "Inter, sans-serif",
//   },

//   shape: {
//     borderRadius: 12,
//   },
// })

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App_Day46Task.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
