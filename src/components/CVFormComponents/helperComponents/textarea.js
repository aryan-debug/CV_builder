import React from "react";

function expandHeight(event){
    const element = event.target;
    element.style.height = "1px";
    element.style.height = (25+element.scrollHeight)+"px";
}

export default function TextArea({state, name, placeholder, InputChangeHandler}){
    return (
        <textarea type="text" name = {name} value = {state.value} placeholder = {placeholder} onChange = {InputChangeHandler} className = "expand-text-input" autoComplete="off"
        onKeyUp={expandHeight}></textarea>
    );
}