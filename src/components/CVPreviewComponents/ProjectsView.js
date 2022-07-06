import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ProjectsView({state}){
    return (
            <div id = "projects">
                <div id = "project-title">
                    <FontAwesomeIcon icon = {faScrewdriverWrench}/>
                    <h2>Projects</h2>
                </div>
                {state.projects.map(project => {
                    return (
                    <div key = {project.id} className = "project-container">
                        <div className = "project-heading">
                            <span className="rounded-rectangle"></span>
                            <h2>{project.project_name}</h2>
                        </div>
                        {(project.live_link || project.code_link) &&
                            <div>
                                <a href = {project.live_link}>Live &nbsp; | &nbsp;</a>
                                <a href = {project.code_link}>Code</a>
                            </div>
                        }
                        
                        <p>Tech Used: {project.tech_used}</p>
                        <ul>
                            <li>{project.point_1}</li>
                            <li>{project.point_2}</li>
                            <li>{project.point_3}</li>
                        </ul>
                    </div>)
                })}
            </div>
    )
}