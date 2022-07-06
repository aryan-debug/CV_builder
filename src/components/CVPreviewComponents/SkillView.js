import React from "react"
import SkillBox from "./skillBox"
import uniqid from "uniqid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWrench } from "@fortawesome/free-solid-svg-icons"


export default function SkillView({state}){
    return (
        <div id = "skills-view-box">
            <div id = "skills-heading">
                <span>
                    <FontAwesomeIcon icon = {faWrench}/>
                </span>
                <h2>Skills</h2> 
            </div>
            <div id = "skill-view">
                {state.skills.map(skill => {
                    return <SkillBox key = {uniqid()} skillName = {skill.skill}/>
                })}
            </div>
        </div>
    )
}