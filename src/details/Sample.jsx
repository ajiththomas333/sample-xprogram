import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState,useEffect } from "react";
import Details from "./Details";
function Sample() {
    const [set, setstate] = useState([])

    const handle = async () => {
        try {
            await fetch('https://fakestoreapi.com/products')
                .then(response => response.json())
                .then(set => setstate(set))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        // function call
        handle();

    }, [])
     console.log(set)
    return (






        <div className="Sample">

            <Router>
                <Routes>
                    <Route path="/fff" element={<Details product={set} />} />
                </Routes>
            </Router>

        
        </div>
    );
}

export default Sample;