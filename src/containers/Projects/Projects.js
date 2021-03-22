import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import ProjectPreview from '../../components/Project/ProjectPreview/ProjectPreview';

import HanLearnImage from '../../assets/images/testwords_pic.png';
import GMOverview from '../../assets/images/GMOverview.png';
import CDCap from '../../assets/images/CD-cap.png';
import MSCap from '../../assets/images/meal-selector.png';

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
                        description="Interactive web app for memorising Mandarin vocabulary. Features include word lookup, handwriting/voice recognition and spaced repetition. ReactJS on the front-end, with a Python REST API."
                        languages={"JavaScript, HTML, CSS, Python"}
                        image={HanLearnImage} 
                        linkTo="hanlearn" />
                    <ProjectPreview
                        title="chin-dict library"
                        description="Python library for showing decomposition/semantic roots of Mandarin Characters with command line interface."
                        languages="Python"
                        linkTo="chin-dict"
                        image={CDCap} />
                    <ProjectPreview
                        title="Meal Selector"
                        description="Simple web app for creating shopping lists from ingredients of regularly cooked meals. ReactJS with Google Firebase Realtime Database."
                        languages="JavaScript, HTML, CSS"
                        linkTo="meal-selector"
                        image={MSCap} />
                    <ProjectPreview
                        title="Global Music"
                        description="Data driven project, mapping traditional music albums from around the world. Data collected from websites and used with Spotify and Google Sheets API."
                        languages="Python"
                        image={GMOverview} 
                        linkTo="global-music" />
                </ul>
            </Aux>
        )
    }
}

export default Projects;