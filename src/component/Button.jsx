import React from 'react'

const Button = ({ color, label, onClick }) => {
    return (
        <button className="btn" onClick={onClick} style={{backgroundColor: color}}>
            {label}
        </button>
    )
}

export default Button
