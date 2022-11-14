import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import classes from './ProjectPreview.module.css';

class ProjectPreview extends Component {

    onClickHandler = () => {
        window.scrollTo(0, 0);
        this.props.history.push(`/projects/${this.props.linkTo}`);
    }
    render () {
        return (
            <li 
                className={classes.ProjectPreview}
                onClick={this.onClickHandler}>
                <div>
                    <h2>{this.props.title}</h2>
                    <p className={classes.Description}>
                        {this.props.description}
                    </p>
                    <br />
                    <h3>Technologies: </h3>
                    <p>{this.props.languages}</p>
                </div>
                <img src={this.props.image} alt="project img"/>
            </li>
        );

    }
};

export default withRouter(ProjectPreview);