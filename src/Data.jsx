import React, { useEffect, useState } from "react";
import Card from "./product/Card";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sample from"./details/Sample";


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
            
            
        
            
           
    

        
      
  
        </div>
        );
    }
  
        export default Data;