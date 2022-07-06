import React from "react";

export default function Input({state, name, placeholder, InputChangeHandler}){
    return (
        <input type="text" name = {name} placeholder = {placeholder} onChange = {InputChangeHandler} className = "text-input" autoComplete="off"></input>
    );
}