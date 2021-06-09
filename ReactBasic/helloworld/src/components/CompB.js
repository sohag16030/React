import React, { Component } from 'react'

export class CompB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             newValue : 0
        }
    }
    
    render() {
        return (
            <div>
                <h1>hello</h1>
            </div>
        )
    }
}

export default CompB
