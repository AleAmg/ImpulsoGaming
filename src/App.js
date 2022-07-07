import "./style.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Service from "./components/Service";
import OurPortfolio from "./components/OurPortfolio";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

/* import { Route, Routes } from "react-router"; */

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/nav" element={<Navbar/>}/>
        
      </Routes> */}
      <Navbar/>
      <Carousel />
      <Service />
      <OurPortfolio />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
