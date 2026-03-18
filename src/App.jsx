import { Route, Routes } from "react-router";
import Home from "./components/home/Home";
import RecipeDetails from "./components/recipe-details/RecipeDetails";


function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/recipe/:id" element={<RecipeDetails/>}/>
    </Routes>
  );
}

export default App;