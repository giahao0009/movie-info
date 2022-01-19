import {useState} from 'react'
import './Button.scss'

function Button(props){

    const handleToTop = () => {
        if(props.type === 'btn-to-top'){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0
        }
    }

    return (
        <button 
            onClick={handleToTop}
            className={`btn ${props.type}`}
            style = {props.style ? props.style : null}
            onClick={props.onClick}
        >{props.children}</button>
    )
}

export default Button