import React, {useState, useEffect} from 'react';

function EffectCleanup () {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    //cleanups helps the performanc of our App
    return () => {
      window.removeEventListener("resize", updateWidth);
      console.log(width)
    };
  });

  return (
    <div>
      <h1>Effect Cleanup </h1>
      <div>{width} px</div>
      
    </div>
  )
}

export default EffectCleanup

