import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Grid,
} from "@mui/material";
import { Home, Menu } from "@mui/icons-material";
import React from "react";
import Header from "./components/Header";
import HomeComponent from "./components/HomeComponent";
import { Container } from "@mui/system";
import FeaturesComponent from "./components/FeaturesComponent";
import DocsComponent from "./components/DocsComponent";
import PricingComponent from "./components/PricingComponent";

function App() {
  return (
    <Box>
      <Header />

      {/* Home */}
      <Box bgcolor={"#3874CB"} width="100vw" minHeight="600px">
        <Toolbar />
        <Container>
          <HomeComponent />
        </Container>
      </Box>

      {/* Home */}
      <Box bgcolor={"#FFF"} width="100vw" minHeight="600px">
        <Container>
          <FeaturesComponent />
        </Container>
      </Box>

      {/* Docs */}
      <Box bgcolor={"#FFF"} width="100vw" minHeight="600px">
        <Container>
          <DocsComponent />
        </Container>
      </Box>

      {/* Pricing */}
      <Box bgcolor={"#FFF"} width="100vw" minHeight="600px">
        <Container>
          <PricingComponent />
        </Container>
      </Box>

    </Box>
  );
}

export default App;
