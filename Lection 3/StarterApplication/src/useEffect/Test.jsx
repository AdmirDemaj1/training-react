import React, { useState,useEffect} from 'react';
import {  useTheme } from "./useContextTheme";

const Test = () => {
    const {theme,toggleTheme} = useTheme();
    console.log("themeeeeee in hereee",theme);

    return (
        <div>
       Alsooo meee
        </div>
    )

}

export default Test;