import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import './Subreddit.css';
import Header from "../../components/header/Header";

function Subreddit() {
    const {id} = useParams();
    const [redditpage, setRedditpage] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://www.reddit.com/r/${id}/about.json`);
                console.log(result);
                setRedditpage(result.data.data);
            } catch (e) {
                console.error(e);
            }
        }
        if (id) {
            fetchData();
        }
    }, [id]);


    return (
        <div className="redditpage">
            {console.log({redditpage})}
            <Header>
                <h1>r/{id}</h1>
                <h4>Subreddit specifications</h4>
            </Header>
            <main>
                <h3>Title</h3>
                <p>{redditpage.title}</p>
                <h3>Description</h3>
                <p>{redditpage.public_description}</p>
                <h3>Number of subscribers</h3>
                <p>{redditpage.subscribers}</p>

                <p><Link to={"/"} id="takemeback">&lt; Take me back</Link></p>
            </main>


        </div>
    );
}


export default Subreddit;