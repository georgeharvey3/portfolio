import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import ProjectPreview from "../../components/Project/ProjectPreview/ProjectPreview";

import HanLearnImage from "../../assets/images/testwords_pic.png";

class ProfessionalProjects extends Component {
    render() {
        return (
            <Aux>
                <h1>Professional Projects</h1>
                <hr style={{ width: "90%" }} />
                <ul
                    style={{
                        listStyle: "none",
                        padding: "10px 0",
                    }}
                >
                    <ProjectPreview
                        title="Cass Art"
                        description="Website replatform for a leading online art retailer."
                        languages={"JavaScript, HTML, CSS, GCP"}
                        image={HanLearnImage}
                        linkTo="cass-art"
                    />
                    <ProjectPreview
                        title="Victoria Health"
                        description="Homepage redesign form online health store featuring fully customisable widgets."
                        languages={"JavaScript, HTML, CSS"}
                        image={HanLearnImage}
                        linkTo="victoria-health"
                    />
                    <ProjectPreview
                        title="Kollect"
                        description="Bespoke questionnaire app for online waste collection service."
                        languages={"React, JavaScript, HTML, CSS"}
                        image={HanLearnImage}
                        linkTo="kollect"
                    />
                </ul>
            </Aux>
        );
    }
}

export default ProfessionalProjects;
