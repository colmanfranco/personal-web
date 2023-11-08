import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";

export default function  Footer() {
    return (
        <footer>
          <Box sx={{ width: 500 }}>
          <BottomNavigation showLabels>
            <BottomNavigationAction label="LinkedIn" />
            <BottomNavigationAction label="Github" />
          </BottomNavigation>
          </Box>
        </footer>
    );
}