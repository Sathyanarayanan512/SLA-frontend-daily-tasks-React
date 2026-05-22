import {Button, Card, CardActions, CardContent, CardHeader, Typography} from "@mui/material"

export default function ProductCard() {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardHeader
        title="Wireless Headphones"
        subheader="Rs. 199"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Noise-cancelling headphones with 30-hour battery life.
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" variant="outlined">
          Add to Cart
        </Button>

        <Button variant="contained" size="small">
          Buy Now
        </Button>
      </CardActions>
    </Card>
  )
}