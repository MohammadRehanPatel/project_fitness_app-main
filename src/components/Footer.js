import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
  <Box mt="60px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="20px"
    >
      <img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="20px"
      textAlign="center"
      pb="20px"
    >
      Made with ❤️ by Me
    </Typography>
  </Box>
);

export default Footer;
