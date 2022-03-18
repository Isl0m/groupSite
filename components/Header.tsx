import React from 'react';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  Container,
  Button,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const pages = [
  ['Галавная', '/'],
  ['Галерея', '/gallery'],
  ['Оценки', '/rating'],
];

const Header: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
              T1-20
            </Typography>
            <Box
              sx={{
                marginLeft: 'auto',
                display: { xs: 'flex', md: 'none' },
              }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}>
                {pages.map((page) => (
                  <MenuItem key={page[0]} onClick={handleCloseNavMenu}>
                    <Typography variant="h5" component="div">
                      <Link href={`${page[1]}`}>
                        <a>{page[0]}</a>
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              T1-20
            </Typography>
            <Box sx={{ marginLeft: 'auto', display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page[0]}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  <Link href={`${page[1]}`}>
                    <a>{page[0]}</a>
                  </Link>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
};
export default Header;
