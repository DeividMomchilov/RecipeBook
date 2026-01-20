import { Route, Routes } from "react-router";
import Home from "./components/home/Home";
import Gallery from "./components/gallery/Gallery";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default App;