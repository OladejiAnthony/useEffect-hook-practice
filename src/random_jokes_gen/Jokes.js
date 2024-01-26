import React,{useState, useEffect} from "react";
import spinner from "../assets/spinner1.jpg"

function Jokes () {
  const [jokes, setJokes] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://api.chucknorris.io/jokes/random";



  const getJoke = () => {
    //fetch new joke on btn click
    setIsLoading(true); //isloading runs
    fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      //console.log(data);
      setJokes(data);
      //console.log(isLoading)
      setIsLoading(false); //isLoading stops
    })
  }
  
  useEffect(() => {
    getJoke()
  },[])
  //console.log(jokes.id)

  return (
   <section className="--flex-center --100vh --bg-primary">
      <div className="container --card --bg-light --p">
        <h2>Random Jokes Generator</h2>
        <div className="--line"></div>
        {
          isLoading 
          ? 
            <div className="--center-all">
              (<img src={spinner} alt="loading" width={100} />) 
            </div>
          : (
              <>
                <h4>Joke id: {jokes.id}</h4>
                <p>{jokes.value}</p>
              </>
            )
        }        
        <br />
        <button 
          onClick={getJoke}
          className="--btn --btn-primary"
        >
          Generate Joke
        </button>
      </div>
    </section>
  )
}

export default Jokes;
