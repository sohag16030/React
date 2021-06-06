import React, { Component } from 'react'

export class BindEvent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : "WelCome"
        
        }
        this.clickHandler = this.clickHandler.bind(this);
    }
 /*    clickHandler=()=>{
        this.setState({
            message : "GoodBye"
        })
    } */

    clickHandler(){
        this.setState({
            message : "GOODBYE"
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={()=>this.clickHandler()}>Click</button>
            </div>
        )
    }
}

export default BindEvent
