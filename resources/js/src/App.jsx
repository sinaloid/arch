import "./App.css";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Index from "./pages/Index";
import Dossier from "./pages/Dossier";

function App() {
  return (
    <Routes>
      {/**
       * <Route path="/" element={<Index />} />
      <Route path="/demande" element={<Dossier />} />
       */}
      <Route path="/" element={<Login />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
