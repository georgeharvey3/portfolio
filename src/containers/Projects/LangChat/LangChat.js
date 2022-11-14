import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import classes from "./LangChat.module.css";

import langchatHome from "../../../assets/images/langchat-home.png";
import langchatVocab from "../../../assets/images/langchat-vocab.png";
import langchatDialogue from "../../../assets/images/langchat-dialogue.png";
import langchatProfile from "../../../assets/images/langchat-profile.png";

import report from "../../../assets/langchat-report.pdf";

class MealSelector extends Component {
    render() {
        return (
            <div className={classes.LangChat}>
                <h1>LangChat</h1>
                <section className={classes.Section}>
                    <h2>Project Overview</h2>
                    <hr />
                    <p>
                        This was a project I undertook to investigate the
                        efficacy of chatbots in the language learning process.
                    </p>
                    <p>
                        I created a rule-based chatbot with a user interface
                        that was able to converse with ESL (English as a Second
                        Language) students.
                    </p>

                    <p>
                        The app offered a set selection of dialogues across
                        different topics, each with increasing levels of
                        complexity, the next being unlocked once the user had
                        completed the current dialogue.
                    </p>
                    <p>
                        Key vocabulary was introduced to students before each of
                        the dialogues and the user's accuracy was monitored
                        over the course of the conversation.
                    </p>
                    <p>
                        Some basic information was stored for each user to
                        display their progress as they continued to use the
                        app.
                    </p>
                    <br />
                    <p>
                        I wrote an extensive report detailing my approach to
                        scoping, building and testing the application which you
                        can download and read
                        <a className={classes.Download} download href={report}>
                            here
                        </a>
                    </p>
                </section>
                <section className={classes.Section}>
                    <ul className={classes.ImageList}>
                        <li>
                            <img
                                src={langchatHome}
                                alt="LangChat home screen"
                            />
                        </li>
                        <li>
                            <img
                                src={langchatVocab}
                                alt="LangChat vocab screen"
                            />
                        </li>
                        <li>
                            <img
                                src={langchatDialogue}
                                alt="LangChat dialogue screen"
                            />
                        </li>
                        <li>
                            <img
                                src={langchatProfile}
                                alt="LangChat profile screen"
                            />
                        </li>
                    </ul>
                </section>
            </div>
        );
    }
}

export default withRouter(MealSelector);
