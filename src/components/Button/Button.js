import React from "react";
import "./Button.css";

const Button = ({ clicked, children }) => {
    return (
        <>
            <button onClick={clicked}>{children}</button>
        </>
    );
};

export default Button;