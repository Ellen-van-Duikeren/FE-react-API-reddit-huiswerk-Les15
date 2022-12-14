import './App.css';
import {Routes, Route} from "react-router-dom";
import Subreddit from "./pages/subreddit/Subreddit";
import './App.css';
import Home from "./pages/home/Home";
import React from "react";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/subreddit/:id" element={<Subreddit/>}/>
            </Routes>
            <footer><p>In opdracht van NOVI Hogeschool &copy; 2022</p></footer>
        </>
    );
}

export default App;
