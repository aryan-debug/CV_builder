import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons'

class SidebarPersonalInfo extends Component{
    render(){
        const state = this.props.state;
        return (
            <div id = "sidebar-personal-info">
                <div>
                    <span className="icon-bg">
                        <FontAwesomeIcon icon = {faEnvelope} className = "sidebar-icon"/>
                    </span>
                    <p>{state.email}</p>
                </div>
                <div>
                    <span className="icon-bg">
                        <FontAwesomeIcon icon = {faPhone} className = "sidebar-icon"/>
                    </span>
                    <p>{state.phone_number}</p>
                </div>
                <div>
                    <span className="icon-bg">
                        <FontAwesomeIcon icon= {faLocationDot} className = "sidebar-icon"/>
                    </span>
                    <p>{state.location}</p>
                </div>
                <div>
                    <span className="icon-bg">
                        <FontAwesomeIcon icon = {faGithub} className = "sidebar-icon"/>
                    </span>
                    <p>{state.gh_account}</p>
                </div>
            </div>
        )
    }
}

export default SidebarPersonalInfo;