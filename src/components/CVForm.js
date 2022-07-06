import React, { Component } from "react";
import AchievementForm from "./CVFormComponents/AchievementForm";
import PersonalInfoForm from "./CVFormComponents/PersonalInfoForm";
import ProjectForm from "./CVFormComponents/ProjectForm";
import SkillsForm from "./CVFormComponents/SkillsForm";

class CVForm extends Component{
    render(){
        const {state, InputChangeHandler, handleSkillAddButton, handleProjectAddButton, handleProjectEdit, handleAddAchievementButton} = this.props;
        return(
        <div id = "cvform">
            <PersonalInfoForm InputChangeHandler = {InputChangeHandler} state = {state}/>
            <SkillsForm state = {state} handleSkillAddButton = {handleSkillAddButton}/>
            <ProjectForm state = {state} handleProjectAddButton = {handleProjectAddButton} handleProjectEdit = {handleProjectEdit}/>
            <AchievementForm handleAddAchievementButton = {handleAddAchievementButton}/>
        </div>)
    }
}

export default CVForm;