import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

const navItems = ["Home", "About", "Contact"];

export default function Header() {
  return (
    <header>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Franco Colman Mendoza
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
}
