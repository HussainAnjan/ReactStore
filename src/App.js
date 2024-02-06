import Product from "./components/Product";
import Navbar from "./components/Navbar";
import { Routes ,Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import ProductDetail from "./components/ProductDetail"
function App() {
  return <>
<Navbar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="Product" element={<Product/>}/>
  <Route path="Product/:id" element={<ProductDetail/>}/>
  <Route path="contact" element={<Contact/>}/>
  <Route path="about" element={<About/>}/>
</Routes>
  </>;
}

export default App;
