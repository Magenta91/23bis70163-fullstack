import { Box, Grid, Card, CardContent, Typography, CardActionArea, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState("");

  function handleCardClick(name) {
    setSelectedCard(name);
    setDialogOpen(true);
  }

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Navbar toggleSidebar={() => setOpen(!open)} />

      {open && <Sidebar />}

      <Box sx={{ flexGrow: 1, mt: 8, p: 3 }}>
        <Grid container spacing={2} justifyContent="center">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item}>
              <Card sx={{ textAlign: "center" }}>
                <CardActionArea onClick={() => handleCardClick(`Card ${item}`)}>
                  <CardContent>
                    <Typography variant="h6">Card {item}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Card Clicked</DialogTitle>
        <DialogContent>
          <Typography>{selectedCard} clicked</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
