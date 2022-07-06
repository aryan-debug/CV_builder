import React, { Component } from "react";
import AddButton from "./helperComponents/AddButton";
import uniqid from "uniqid";
import SkillBox from "../CVPreviewComponents/skillBox";


class SkillsForm extends Component{

    constructor(props){
        super(props)
        this.state = {
            skill:"",
        }
        this.skillChangeHandler = this.skillChangeHandler.bind(this);
    }

    skillChangeHandler(event){
        this.setState({skill: event.target.value});
    }

    render(){
        const {state, handleSkillAddButton} = this.props;
        return(
        <div>
            <div id = "skill-form">
                <input placeholder = "Add Skill" onChange={this.skillChangeHandler} className = "text-input"></input>
                <AddButton title = "Add Skill" onClickHandler = {() => handleSkillAddButton(this.state.skill)}/>
            </div>
            <div id = "skills-form-view">
            {state.skills.map(skill =>{
                return <SkillBox key = {uniqid()} skillName={skill.skill}/>
            })}
            </div>
        </div>)
    }
}

export default SkillsForm;