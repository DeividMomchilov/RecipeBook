import { Route, Routes } from "react-router";
import Home from "./components/home/Home";
import RecipeDetails from "./components/recipe-details/RecipeDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails/>}/>
      </Routes>
  </>
  );
}

export default App;