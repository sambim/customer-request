import React from 'react'
import Button from './Button'

const Header = ({title, onClickButton, showForm}) => {
    return (
        <div>
            <header className="header">
                <h1>{title}</h1>
                <Button 
                label={showForm ? "Close": "Add"}
                onClickButton={onClickButton} 
                color={showForm ? "purple" : "green"}/>                
            </header>
    
        </div>
    )
}

export default Header
