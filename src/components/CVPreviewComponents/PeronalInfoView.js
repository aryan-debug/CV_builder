import React, {Component} from "react";

class PersonalInfoView extends Component{
    render(){
        const state = this.props.state;
        return (
            <div id = "personal-info">
                <h1 id = "name-heading">{state.name}</h1>
                <h3 id = "title">{state.title}</h3>
                <p id = "your-description">{state.description}</p>
            </div>
        )
    }
}

export default PersonalInfoView;