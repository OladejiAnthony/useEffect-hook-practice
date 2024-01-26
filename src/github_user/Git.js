import React, {useState, useEffect} from "react";

const url = "https://api.github.com/users";

function Git () {
   const [users, setUser] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(false);

   const getUser = async () => {
    setIsLoading(true);
    setError(false);

      try {
        const response = await fetch(url);
        //console.log(response);
        if(!response.ok) {
          throw new Error("failed")
        }
        const data = await response.json();
        //console.log(data);
        setUser(data);
        setIsLoading(false);
      } catch(err){
        console.log(err.message);
        setError(true);
        setIsLoading(false)
      }
    
   }

   useEffect(() => {
    getUser()
   },[])

  return (
    <div className="--bg-primary --py2">
      <div className="container">
        <header>
          <h1 className="--text-center --text-light">GitHub Users</h1>
          <div className="--line"></div>
        </header>
     
        {isLoading && 
          <div className="--center-all --p">
            <h4 className="--text-light">Loading...</h4>
          </div>
        }
            
        <div className="--grid-25 --py">
        {error 
          ? (<h4 className="--text-light">Something went wrong, Redirecting...</h4>)
          : (
              users.map((user) => {
                const {id, login, avatar_url, html_url} = user;
                //console.log(user.id)
                return (
                  <div key={id} className="--card --bg-light --p --flex-start">
                      <img
                        src={avatar_url}
                        alt={login}
                        className="--profile-img --mx"
                      />
                      <span>
                        <h4>{login}</h4>
                        <a href={html_url}>View Profile</a>
                      </span>
                   </div>
                )
              })
            )
        }            
        </div>
      </div>
    </div>
  )
}

export default Git;
