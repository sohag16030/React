import React, { Component } from 'react'
import CompB from './CompB'

export class CompA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             value : 0
        }
    }
    static getDerivedStateFromProps(props,state){
        return{
            
        }
    }

    //  increment =()=>{
    //    this.setState({
    //        value : this.state.value + 1
    //    })
    //  }
    
    render() {       
        return (
            <div>
                <h2>Value : {this.state.value}</h2>
                <CompB data={this.state.value}></CompB>
                {/* <button onClick={()=>this.increment()}>Increment</button> */}
            </div>
        )
    }
}

export default CompA
