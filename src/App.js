import React from 'react'
import GithubUsers from './github_user/GithubUsers'
import Jokes from './random_jokes_gen/Jokes'
import EffectHooks from "./useEffect_practice/EffectHooks"

//UseEffect Basics
//Random Jokes Generator Project
//Fetching Github Users Project

const App = () => {

  return (
    <div>
      <EffectHooks />
      <Jokes />
      {/* <GithubUsers /> */}
    </div>
  )
}


export default App
