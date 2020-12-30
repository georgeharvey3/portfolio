import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import ProjectPreview from '../../components/Project/ProjectPreview/ProjectPreview';

import HanLearnImage from '../../assets/images/testwords_pic.png';
import GMOverview from '../../assets/images/GMOverview.png';

class Projects extends Component {
    render () {
        return (
            <Aux>
                <h1>Projects</h1>
                <hr style={{width: "90%"}} />
                <ul style={{
                        listStyle: "none",
                        padding: "10px 0"}}>
                    <ProjectPreview 
                        title="HanLearn"
                        description="Interactive web app for memorising Mandarin vocabulary. Features include word lookup, handwriting/voice recognition and spaced repetition. ReactJS on the front-end, with a Python REST API"
                        languages={"JavaScript, HTML, CSS, Python"}
                        image={HanLearnImage} 
                        linkTo="hanlearn" />
                    <ProjectPreview
                        title="Global Music"
                        description="Data driven project, mapping traditional music albums from around the world. Data collected from websites and used with Spotify and Google Sheets API."
                        languages="Python"
                        image={GMOverview} 
                        linkTo="global-music" />
                    <ProjectPreview
                        title="Character Decomposer"
                        description="Python library for showing decomposition/semantic roots of Mandarin Characters. Usable with Command Line Interface"
                        languages="Python"
                        linkTo="character-decomposer"
                        image={HanLearnImage} />
                </ul>
            </Aux>
        )
    }
}

export default Projects;