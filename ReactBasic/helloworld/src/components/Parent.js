import React, { Component } from 'react'
import Child from "./Child"
export class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : "User"
        }
    }
    greeting(){
        alert("Hello " + this.state.message)
    }
    
    render() {
        return (
            <div>
                <Child gteetingsMethod ={()=>this.greeting()}></Child>
            </div>
        )
    }
}

export default Parent
