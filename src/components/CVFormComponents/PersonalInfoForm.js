import React, { Component } from "react";
import Input from "./helperComponents/Input";
import TextArea from "./helperComponents/textarea";


class PersonalInfoForm extends Component{
    render(){
        const {state, InputChangeHandler} = this.props;
        return(
        <div>
            <Input state = {state} name = "name" placeholder = "Name" InputChangeHandler= {InputChangeHandler}/>
            <Input state = {state} name = "title" placeholder = "Title" InputChangeHandler={InputChangeHandler}/> 
            <TextArea state = {state} name = "description" placeholder = "Description" InputChangeHandler={InputChangeHandler}/>
            <Input state = {state} name = "email" placeholder = "Email" InputChangeHandler={InputChangeHandler}/>
            <Input state = {state} name = "phone_number" placeholder = "Phone number" InputChangeHandler={InputChangeHandler}/>
            <Input state = {state} name = "location" placeholder = "Location" InputChangeHandler={InputChangeHandler}/>
            <Input state = {state} name = "gh_account" placeholder = "Github Account" InputChangeHandler={InputChangeHandler}/>
        </div>)
    }
}

export default PersonalInfoForm;