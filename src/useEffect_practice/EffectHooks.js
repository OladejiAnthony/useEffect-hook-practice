import React, {useState, useEffect} from 'react';

//useEfffect operations are as follows: 
//1. on initial render
//2. on every render or re-render
//3. only when a state or prop change

//useEffect use cases: fetching data, complex updates to components etc

function EffectHook () {
  const [count, setCount] = useState(0);
  //on initial render
  useEffect( () => {
    console.log("on initial render")
  },[])
  //on every re-render
  useEffect( () => {
    console.log("on every re-render")
  })
  
  //when state or prop changes
  useEffect( () => {
    console.log(`on state or prop change ${count}`)
  },[count]
  )
  //cleanup - cleanup the function operation inside your useEffect hook after it render's befor another rerender
  useEffect(() => {

  })


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  )
}


export default EffectHook
