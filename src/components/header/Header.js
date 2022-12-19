import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

function Header({children}) {
    return (
        <header className="outer-container">
            <div className="inner-container">
                <nav>
                    <ul>
                        <li><NavLink to="/" className="navfontsize">hottest posts</NavLink></li>
                        <li><a href="https://www.reddit.com/" className="navfontsize">reddit</a></li>
                        <li><NavLink to="/subreddit/memes" className="navfontsize">meme</NavLink></li>
                    </ul>
                </nav>
                <div className="logoandtext">
                    {children}
                </div>
            </div>
        </header>
    );
}

export default Header;