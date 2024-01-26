import React,{useState, useEffect} from "react";
import spinner from "../assets/spinner1.jpg";
//import axios from 'axios';

function Joking () {
  const [joke, setJoke] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://api.chucknorris.io/jokes/random";
  const axios = require('axios');

  const handleClick = () => {
    setIsLoading(true); //isloading runs
    axios.get(url)
    .then((response) => {
      //console.log(response.data)
      setJoke(response.data);
      setIsLoading(false); 
    })
  }

  useEffect(() => {
    handleClick()
  },[])
  //console.log(joke)

  return (
    <div>
      {
        isLoading 
        ? ( <img src={spinner} alt="loading" />)
        : (
          <>
            <h1>Joke id: {joke.id}</h1>
            <p>{joke.value}</p>
          </>
        )
      }     
      <br />
      <button onClick={handleClick}>
        Generate Jokes
      </button>
    </div>
  )
}

export default Joking;
