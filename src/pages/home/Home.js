import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Home.css';
import logo from '../../assets/logo.png';
import {Link} from "react-router-dom";
import Header from "../../components/header/Header";

function Home() {
    const [reddits, setReddits] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get("https://www.reddit.com/hot.json?limit=15");
                // console.log(result.data.data.children);
                // console.log(result.data.data.children[0].data.id);
                // console.log(result.data.data.children[0].data.title);
                // console.log(result.data.data.children[0].data.url);
                // console.log(result.data.data.children[0].data.subreddit_name_prefixed);
                // console.log("Comments: " + result.data.data.children[0].data.num_comments);
                // console.log("Ups: " + result.data.data.children[0].data.ups);
                setReddits(result.data.data.children);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="homepage">
            {console.log({reddits})}
            <Header>
                <img src={logo} alt="logo Reddit" id="logo"/>
                <h1 className="roboto">Reddit</h1>
            </Header>

            <main className="outer-container">
                <div className="inner-container">
                    <h2 className="roboto">Hottest posts</h2>
                    <h4>on Reddit right now</h4>
                    <div className="cards">
                        {reddits.map((reddit) => {
                            return (
                                <article key={reddit.data.id} className="card">
                                    <a href={reddit.data.url}><h3>{reddit.data.title}</h3></a>
                                    <span>
                                        <p className="roboto" id="linkto"><Link
                                            to={"/subreddit/" + reddit.data.subreddit}
                                            id="link-to-reddit">{reddit.data.subreddit_name_prefixed}</Link></p>
                                        <p className="roboto">Comments: {reddit.data.num_comments} - Ups: {reddit.data.ups}</p>
                                    </span>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </main>
        </div>
    )
        ;

}

export default Home;