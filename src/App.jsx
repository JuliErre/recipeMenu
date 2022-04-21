import react, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Stack, VStack } from "@chakra-ui/react";
import Login from "./components/Login";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  Navigate,
} from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import ProjectRoutes from "./components/ProjectRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
        <Stack   justifyContent='center' align='center' backgroundColor="gray.100">
        <Navbar />
          <Container maxW="container.lg" minHeight="100vh"  >
           
            
            <ProjectRoutes />
            
          </Container>
        </Stack>
      </BrowserRouter>
    </div>
  );
}

export default App;
