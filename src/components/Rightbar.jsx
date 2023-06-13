import { Box } from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      bgcolor={"lightcoral"}
      sx={{ display: { xs: "none", md: "block" } }}
      flex={2}
      p={2}
    >
      Rightbar
    </Box>
  );
};

export default Rightbar;
