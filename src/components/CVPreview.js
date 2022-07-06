import React, { Component } from "react";
import AchievementView from "./CVPreviewComponents/AchievementView";
import PersonalInfoView from "./CVPreviewComponents/PeronalInfoView";
import ProjectsView from "./CVPreviewComponents/ProjectsView";
import SidebarPersonalInfo from "./CVPreviewComponents/SidebarPersonalInfo";
import SkillView from "./CVPreviewComponents/SkillView";



class CVPreview extends Component{
    render(){
        const state = this.props.state;
        return(
        <div id = "cvpreview">
            <div id = "main-view">
                <PersonalInfoView state = {state}/>
                <ProjectsView state = {state}/>
            </div>
            <div id = "sidebar">
                <SidebarPersonalInfo state = {state}/>
                <SkillView state = {state}/>
                <AchievementView state = {state}/>
            </div>
        </div>)
    }
}

export default CVPreview;