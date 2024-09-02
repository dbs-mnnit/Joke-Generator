import React, { useState } from 'react';
import './Joke.css';
import Card from './Card';
function Joke() {
    const [joke, setJoke] = useState("Dark humor is like food, not everyone gets it.");
    const [jokeCategory, setJokeCategory] = useState('Dark');
    const handleClick = async () => {
        try {
            const request = await fetch("https://sv443.net/jokeapi/v2/joke/Any?type=single");
            const response = await request.json();
            console.log(response);
            setJoke(response.joke);
            setJokeCategory(response.category);
        } catch (error) {
            console.error("Error fetching the joke:", error);
            setJoke("Failed to fetch a joke, please try again!");
        }
    }

    return (
        <div className='wrapper'>
            <h1 className='heading'>Welcome to JOKEPUR</h1>
            <h2 className='category'>{jokeCategory} Joke</h2>
            <Card joke={joke}/>
            <button className='button' onClick={handleClick}>CLICK TO GENERATE A JOKE</button>
        </div>
    );
}

export default Joke;
