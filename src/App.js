import "./style.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Service from "./components/Service";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Service />
    </div>
  );
}

export default App;
