import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import ProjectPreview from "../../components/Project/ProjectPreview/ProjectPreview";

import CassArtImg from "../../assets/images/CassArt.png";
import VictoriaHealthImg from "../../assets/images/VictoriaHealth.png";
import KollectImg from "../../assets/images/Kollect.png";

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
                        image={CassArtImg}
                        linkTo="cass-art"
                    />
                    <ProjectPreview
                        title="Victoria Health"
                        description="Homepage redesign form online health store featuring fully customisable widgets."
                        languages={"JavaScript, HTML, CSS"}
                        image={VictoriaHealthImg}
                        linkTo="victoria-health"
                    />
                    <ProjectPreview
                        title="Kollect"
                        description="Bespoke questionnaire app for online waste collection service."
                        languages={"React, JavaScript, HTML, CSS"}
                        image={KollectImg}
                        linkTo="kollect"
                    />
                </ul>
            </Aux>
        );
    }
}

export default ProfessionalProjects;
