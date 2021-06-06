import React, { Component } from 'react'

export class ClickTwo extends Component {
     clickHander =()=>{
        console.log("Clicked");
       }
    render() {
      
        return (
            <div>
              <button onClick={()=>this.clickHander()} >Click</button>
            </div>
        )
    }
}

export default ClickTwo
