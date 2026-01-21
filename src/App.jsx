import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddBlog from "./pages/AddBlog";
import Footer from "./components/Footer";
import BlogDetails from "./pages/BlogDetails";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBlog />} />
      </Routes>

      <Footer />
    </>
  );
}
