import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import MyContextPhotos from "./MyContextphotos";
export default function App() {

  return (
    <div className="App">
      <MyContextPhotos>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </MyContextPhotos>
    </div>
  );
}
