
import Data from "./Data";
import Banner from "./banner/Banner";
import Details from "./details/Details";
import Navbar from "./navbar/Navbar";
import Product from "./product/Product";



function App() {

  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Product/>
      <Data/>
      
    </div>
  );
}

export default App;
