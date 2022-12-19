import './App.css';
import {Routes, Route} from "react-router-dom";
import Subreddit from "./pages/subreddit/Subreddit";
import './App.css';
import Home from "./pages/home/Home";
import React from "react";
import Footer from "./components/footer/Footer";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/subreddit/:id" element={<Subreddit/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
