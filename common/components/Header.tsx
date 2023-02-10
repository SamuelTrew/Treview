import AdbIcon from "@mui/icons-material/Adb"
import MenuIcon from "@mui/icons-material/Menu"
import AppBar from "@mui/material/AppBar"
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Toolbar from "@mui/material/Toolbar"
import Tooltip from "@mui/material/Tooltip"
import Typography from "@mui/material/Typography"
import * as React from "react"

import Link from "./Link"

const pages = ["About"]
const settings = ["Profile", "Account", "Dashboard", "Logout"]

const Header = (): React.ReactElement => {
   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
      setAnchorElNav(event.currentTarget)
   }
   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>): void => {
      setAnchorElUser(event.currentTarget)
   }

   const handleCloseNavMenu = (): void => {
      setAnchorElNav(null)
   }

   const handleCloseUserMenu = (): void => {
      setAnchorElUser(null)
   }

   return (
      <AppBar position="static">
         <Container maxWidth="xl">
            <Toolbar disableGutters>
               <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
               <Typography
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                     mr: 2,
                     display: { xs: "none", md: "flex" },
                     fontFamily: "monospace",
                     fontWeight: 700,
                     letterSpacing: ".3rem",
                     color: "inherit",
                     textDecoration: "none",
                  }}
                  variant="h6"
               >
                  LOGO
               </Typography>

               <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                     aria-controls="menu-appbar"
                     aria-haspopup="true"
                     aria-label="account of current user"
                     color="inherit"
                     size="large"
                     onClick={handleOpenNavMenu}
                  >
                     <MenuIcon />
                  </IconButton>
                  <Menu
                     keepMounted
                     anchorEl={anchorElNav}
                     anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                     }}
                     id="menu-appbar"
                     open={Boolean(anchorElNav)}
                     sx={{
                        display: { xs: "block", md: "none" },
                     }}
                     transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                     }}
                     onClose={handleCloseNavMenu}
                  >
                     {pages.map((page) => (
                        <MenuItem href="/about" key={page} LinkComponent={Link}>
                           <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                     ))}
                  </Menu>
               </Box>
               <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
               <Typography
                  noWrap
                  component="a"
                  href=""
                  sx={{
                     mr: 2,
                     display: { xs: "flex", md: "none" },
                     flexGrow: 1,
                     fontFamily: "monospace",
                     fontWeight: 700,
                     letterSpacing: ".3rem",
                     color: "inherit",
                     textDecoration: "none",
                  }}
                  variant="h5"
               >
                  LOGO
               </Typography>
               <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {pages.map((page) => (
                     <Button
                        href="/about"
                        key={page}
                        LinkComponent={Link}
                        sx={{ my: 2, color: "white", display: "block" }}
                     >
                        {page}
                     </Button>
                  ))}
               </Box>

               <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                     <IconButton sx={{ p: 0 }} onClick={handleOpenUserMenu}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                     </IconButton>
                  </Tooltip>
                  <Menu
                     keepMounted
                     anchorEl={anchorElUser}
                     anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                     }}
                     id="menu-appbar"
                     open={Boolean(anchorElUser)}
                     sx={{ mt: "45px" }}
                     transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                     }}
                     onClose={handleCloseUserMenu}
                  >
                     {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                           <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                     ))}
                  </Menu>
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   )
}
export default Header
