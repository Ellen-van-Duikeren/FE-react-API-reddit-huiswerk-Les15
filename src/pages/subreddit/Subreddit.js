import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import './Subreddit.css';
import Header from "../../components/header/Header";
import numberFormat from "../../helpers/numberFormat";

function Subreddit() {
    const {id} = useParams();
    const [redditpage, setRedditpage] = useState({});
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            toggleError(false);
            toggleLoading(true);

            try {
                const result = await axios.get(`https://www.reddit.com/r/${id}/about.json`);
                console.log(result);
                setRedditpage(result.data.data);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }

        if (id) {
            fetchData();
        }
    }, [id]);


    return (
        <div className="redditpage">
            {console.log({redditpage})}
            <Header>
                {error && <span className="errors">Er is iets misgegaan met het ophalen van de data</span>}
                {loading && <span>Loading...</span>}
                <h1>r/{id}</h1>
                <h4>Subreddit specifications</h4>
            </Header>
            <main>
                <h3>Title</h3>
                <p>{redditpage.title}</p>
                <h3>Description</h3>
                <p>{redditpage.public_description}</p>
                {/*<p>{redditpage.public_description}</p>*/}
                <h3>Number of subscribers</h3>
                <p>{redditpage.subscribers && numberFormat(redditpage.subscribers)}</p>


                <p><Link to={"/"} id="takemeback">&lt; Take me back</Link></p>
            </main>


        </div>
    );
}


export default Subreddit;