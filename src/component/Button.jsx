import React from 'react'

const Button = ({ color, label, onClickButton }) => {

    return (
        <button className="btn" onClick={onClickButton} style={{backgroundColor: color}}>
            {label}
        </button>
    )
}

export default Button
