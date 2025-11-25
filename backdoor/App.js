import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import OutfitPicker from "./components/OutfitPicker";
import Saved from "./components/Saved";
import Nav from "./components/Nav";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<><Hero /><OutfitPicker /></>} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </BrowserRouter>
  );
}
