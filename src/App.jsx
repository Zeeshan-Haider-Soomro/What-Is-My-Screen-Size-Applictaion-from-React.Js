import React, { useEffect, useState } from 'react'

const App = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  // console.log("mounted");
  const updateDimension = () =>[
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })
  ]
  
  useEffect(()=>{
    window.addEventListener("resize", updateDimension)
    
    // console.log(window.innerWidth,window.innerWidth);

  },[dimensions])
  
  return (
    <div className='flex justify-center items-center text-[100px] flex-wrap'>
      <h1>{dimensions.width} X {dimensions.height}</h1>
    </div>
  )
}

export default App