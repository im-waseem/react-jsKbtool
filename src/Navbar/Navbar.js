import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../Search/assests/11Logo11-removebg-preview.png"; // Replace 'your_logo_path' with your actual logo path

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', marginLeft: "10px" }}>
        {/* Centered logo */}
        <img src={Logo} alt="Your Logo" height="86px" /> {/* Adjust height as needed */}

        {/* Menu button */}
        <IconButton
          size="larger"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          style={{ margin: "10px" }}
        >
          <MenuIcon />
        </IconButton>

        {/* Dropdown */}
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {/* Use Link from react-router-dom to navigate to the BusinessComponent */}
          <MenuItem>
            <Link to="/business-tool" style={{ textDecoration: 'none', color: 'inherit' }}>
              Business Tool
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>Other Menu Item</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
