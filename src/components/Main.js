import React, {Component} from "react";
import CVForm from "./CVForm";
import CVPreview from "./CVPreview";
import "../styles/styles.scss";
import uniqid from "uniqid"

class Main extends Component{
    constructor(){
        super()
    
        this.state = {
            name: "",
            title: "",
            description: "",
            email: "",
            phone_number: "",
            location: "",
            gh_account: "",
            skills: [],
            projects: [],
            achievements: [],
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSkillAddButton = this.handleSkillAddButton.bind(this);
        this.handleProjectAddButton = this.handleProjectAddButton.bind(this);
        this.handleProjectEdit = this.handleProjectEdit.bind(this);
        this.handleAddAchievementButton = this.handleAddAchievementButton.bind(this)
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    handleSkillAddButton(skillName){
        this.setState({skills: this.state.skills.concat({id: uniqid(), skill:skillName})})
    }

    handleProjectAddButton(){
        this.setState({projects: this.state.projects.concat({
            id: uniqid(),
            project_name:"",
            live_link: "",
            code_link: "",
            tech_used: "",
            point_1: "",
            point_2: "",
            point_3: ""})});
    }

    handleProjectEdit(event, id){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState(prevState => ({
            projects: prevState.projects.map(
                project => {return project.id === id ? {...project, [name]:value} : project}
            )
        }))

    }

    handleAddAchievementButton(achievement_name){
        this.setState({achievements: this.state.achievements.concat({id: uniqid(), achievement:achievement_name})}, () => console.log(this.state.achievements))
    }

    render(){
        return(
        <div id = "main">
            <CVForm
            state = {this.state}
            InputChangeHandler = {this.handleInputChange}
            handleSkillAddButton = {this.handleSkillAddButton}
            handleProjectAddButton = {this.handleProjectAddButton}
            handleProjectEdit = {this.handleProjectEdit}
            handleAddAchievementButton = {this.handleAddAchievementButton}
            />
            <CVPreview state = {this.state}></CVPreview>
        </div>)
    }
}
export default Main;