import React, { Component } from 'react'

export class CarTwo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : "Hello"
        }
    }
    
    render() {
        const{brand,colour}= this.props;
        const{message}=this.state
        return (
            <div>
                <h1>Brand: {brand} Colour:{colour}</h1>
                <h1>message</h1>
            </div>
        )
    }
}

export default CarTwo

