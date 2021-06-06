import React from 'react'

const Child = (props) => {
    return (
        <div>
            <button onClick={()=>props.gteetingsMethod()}>Greeting</button>
        </div>
    )
}

export default Child
