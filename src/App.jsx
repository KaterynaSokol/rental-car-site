import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import CataloguePage from "./pages/CataloguePage/CataloguePage";
import ItemPage from "./pages/ItemPage/ItemPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CataloguePage />} />
        <Route path="/catalog/:id" element={<ItemPage />} />
      </Routes>
    </>
  );
}

export default App;
