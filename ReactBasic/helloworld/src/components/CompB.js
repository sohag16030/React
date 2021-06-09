import React, { Component } from 'react'

export class CompB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             newValue : 0
        }
    }
    static getDerivedStateFromProps(props,state){
        return{
               newValue : props.data  + 5
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.newValue}</h1>
            </div>
        )
    }
}

export default CompB
