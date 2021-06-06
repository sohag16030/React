import React from 'react'

/* const CarOne = ({brand,colour}) => {
    return (
        <div>
            <h2>brand:{brand} Colour:{colour}</h2>
        </div>
    )
}

export default CarOne */

const CarOne = (props) => {
    const{brand,colour} = props
    return (
        <div>
            <h2>brand:{brand} Colour:{colour}</h2>
        </div>
    )
}

export default CarOne
