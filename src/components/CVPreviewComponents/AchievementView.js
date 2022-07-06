import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function AchievementView({state}){
    return (
        <div id = "achievements-box">
            <div id = "achievements-heading">
                <span>
                    <FontAwesomeIcon icon = {faTrophy}/>
                </span>
                <h2>Achievements</h2> 
            </div>
            {
                state.achievements.map(achievement => {
                    return <h3 className = "achievement" key = {achievement.id}>{achievement.achievement}</h3>
                })
            }
        </div>
    )
}