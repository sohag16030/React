import React from 'react'
import {Student} from "./Student"

const Person = () => {
 const  PopUpMessage=()=>{
      alert("hello")
  }
    return (
        <div>
            <Student age={10}></Student>
        </div>
    )
}

export default Person
