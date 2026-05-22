import { Box } from "@mui/material"

import LoginForm from "./Day44/20-05-2026/LoginForm"
import ProductCard from "./Day44/20-05-2026/ProductCard"

export default function App() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 4,
        p: 4,
        flexWrap: "wrap",
      }}
    >
      <LoginForm />
      <ProductCard />
    </Box>
  )
}