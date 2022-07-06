import React, {Component} from "react";
import AddButton from "./helperComponents/AddButton";
import Input from "./helperComponents/Input";

class ProjectForm extends Component{

    render(){
        const {state, handleProjectAddButton, handleProjectEdit} = this.props;
        return (
        <div id = "project-container">
            {
                state.projects.map((project) => {
                    return (
                    <div key = {project.id} className="project-form">
                        <Input state = {state} name = "project_name" placeholder = "Project Name" InputChangeHandler = {(e) => handleProjectEdit(e, project.id)}/>
                        <Input state = {state} name = "live_link" placeholder = "Live link" InputChangeHandler = {(e) => handleProjectEdit(e, project.id)}/>
                        <Input state = {state} name = "code_link" placeholder = "Code link" InputChangeHandler = {(e) => handleProjectEdit(e, project.id)}/>
                        <Input state = {state} name = "tech_used" placeholder = "Tech used" InputChangeHandler = {(e) => handleProjectEdit(e, project.id)}/>
                        <Input state = {state} name = "point_1" placeholder = "Point 1" InputChangeHandler = {(e) => handleProjectEdit(e, project.id)}/>
                        <Input state = {state} name = "point_2" placeholder = "Point 2" InputChangeHandler = {(e) => handleProjectEdit(e, project.id)}/>
                        <Input state = {state} name = "point_3" placeholder = "Point 3" InputChangeHandler = {(e) => handleProjectEdit(e, project.id)}/>
                        <br></br>
                    </div>
                    )
                })

            }
            <AddButton title = "Add Project" onClickHandler={handleProjectAddButton}/>
        </div>)
    }

}

export default ProjectForm;