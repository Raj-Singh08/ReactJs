import React, { useState } from 'react'

export const User = () => {

    const [num, setA] = useState([10,20,30])

    function ChangeA(){
        setA(prev=>([...prev,40])) 
    }
    
  return (
    <>
    <div>Value of a is {num}</div>
    <button onClick={ChangeA}>Change a</button>
    </>
  )
}
