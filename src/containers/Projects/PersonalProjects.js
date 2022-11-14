import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import ProjectPreview from "../../components/Project/ProjectPreview/ProjectPreview";

import HanLearnImage from "../../assets/images/testwords_pic.png";
import GMOverview from "../../assets/images/GMOverview.png";
import CDCap from "../../assets/images/CD-cap.png";
import LangChatHome from "../../assets/images/langchat-home.png";

class PersonalProjects extends Component {
    render() {
        return (
            <Aux>
                <h1>Personal Projects</h1>
                <hr style={{ width: "90%" }} />
                <ul
                    style={{
                        listStyle: "none",
                        padding: "10px 0",
                    }}
                >
                    <ProjectPreview
                        title="HanLearn"
                        description="Interactive web app for memorising Mandarin vocabulary. Features include word lookup, handwriting/voice recognition and spaced repetition. ReactJS on the front-end, with a Python REST API."
                        languages={"JavaScript, React, HTML, CSS, Python, Flask"}
                        image={HanLearnImage}
                        linkTo="hanlearn"
                    />
                    <ProjectPreview
                        title="chin-dict"
                        description="Python library for showing decomposition/semantic roots of Mandarin Characters with command line interface."
                        languages="Python"
                        linkTo="chin-dict"
                        image={CDCap}
                    />
                    <ProjectPreview
                        title="LangChat"
                        description="Web app allowing English learners to practise their speaking skills with a chatbot. ReactJS with a Flask server."
                        languages="JavaScript, React, Python, HTML, CSS, AIML, SQLite"
                        linkTo="langchat"
                        image={LangChatHome}
                    />
                    <ProjectPreview
                        title="Global Music"
                        description="Data driven project, mapping traditional music albums from around the world. Data collected from websites and used with Spotify and Google Sheets API."
                        languages="Python"
                        image={GMOverview}
                        linkTo="global-music"
                    />
                </ul>
            </Aux>
        );
    }
}

export default PersonalProjects;
