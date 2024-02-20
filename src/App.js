import { useEffect } from "react";
import { useState } from "react";
import Banner from "./banner/Banner";
import Navbar from "./navbar/Navbar";
import Product from "./product/Product";
import Card from "./product/Card";


function App() {
const[posts,setdata]=useState([])

  useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(posts => setdata(posts))


  },[])
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Product/>
      
       

           <Card data={posts}/>
           

      
     
    </div>
  );
}

export default App;
