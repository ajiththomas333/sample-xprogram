import { useEffect, useState } from "react";
import Card from "./product/Card";
import Details from "./details/Details";

function Data() {
    const[posts,setposts]=useState([])

    // function to fetchy and set data 
    const handle = async()=>{
        try {
            await fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(posts => setposts(posts))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        // function call
        handle();

    },[])

    return (
      <div className="data">
           
            <Card data={posts}/>
           <Details product={posts}/>
        
            
           
    

        
      
  
        </div>
        );
    }
  
        export default Data;