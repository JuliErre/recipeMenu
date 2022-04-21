import React, { useEffect, useState } from "react";
import { Route, useNavigate, Navigate, Routes } from "react-router-dom";
import DetailPage from "./DetailPage";
import HomeScreen from "./HomeScreen";
import Login from "./Login";
import SearchPage from "./SearchPage";

function ProjectRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigator = useNavigate();
  const isLogin = () => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      navigator("/login");
    }
  };

  useEffect(() => {
    isLogin();
  }, []);
  return (
    <Routes>
      <Route exact path="/" element={<HomeScreen />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/search" element={<SearchPage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
    </Routes>
  );
}

export default ProjectRoutes;
