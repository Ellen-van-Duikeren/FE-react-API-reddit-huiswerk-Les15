import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Home.css';
import logo from '../../assets/favicon.ico';
import {Link} from "react-router-dom";
import Header from "../../components/header/Header";
import numberFormat from "../../helpers/numberFormat";
import favicon from '../../assets/favicon.ico';

function Home() {
    const [reddits, setReddits] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            toggleError(false);
            toggleLoading(true);

            try {
                const result = await axios.get("https://www.reddit.com/hot.json?limit=15");
                setReddits(result.data.data.children);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }

        fetchData();
    }, []);

    return (
        <div className="homepage">
            {console.log({reddits})}
            <Header>
                {error && <span className="errors">Er is iets misgegaan met het ophalen van de data</span>}
                {loading && <span>Loading...</span>}
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
                                        <p className="roboto">Comments: {numberFormat(reddit.data.num_comments)} - Ups: {numberFormat(reddit.data.ups)}</p>
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