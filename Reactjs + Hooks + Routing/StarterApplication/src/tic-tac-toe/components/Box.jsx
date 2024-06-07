import React from "react";

import "./Box.css"

export const Box = ({value, onClick}) => {

    const styling = value === "X" ? "box x" : "box o";

    return (
        <button className={styling} onClick={onClick}>{value}</button>
    )
}