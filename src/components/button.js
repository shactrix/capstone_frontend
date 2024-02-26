import React from "react";
import { Link } from "react-router-dom";
import '../styles/button.css';

const Button = (props) => {
    const { to, label } = props;
    return (
        <button className='button' >
            <Link to={to} className='button'>{label} </Link>
        </button>
    )
}

export default Button;