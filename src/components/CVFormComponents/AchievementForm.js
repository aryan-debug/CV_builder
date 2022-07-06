import React, { Component } from "react";
import AddButton from "./helperComponents/AddButton";

class AchievementForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            achievement: ""
        }
        this.achievementChangeHandler = this.achievementChangeHandler.bind(this);
    }

    achievementChangeHandler(event){
        this.setState({achievement: event.target.value});
    }

    render(){
        const {handleAddAchievementButton} = this.props;
        return (
            <div id = "achievement-form">
                <input placeholder = "Add Achievement" onChange={this.achievementChangeHandler} className = "text-input"></input>
                <AddButton title = "Add Achievement" onClickHandler = {() => handleAddAchievementButton(this.state.achievement)}/>
            </div>
        )
    }
}

export default AchievementForm;