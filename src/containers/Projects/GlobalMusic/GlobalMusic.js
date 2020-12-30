import React from 'react';
import Aux from '../../../hoc/Aux';

import classes from './GlobalMusic.module.css';

import GMScreenCap from '../../../assets/images/GM-screen-cap.png';
import GMSheet from '../../../assets/images/GM-sheet.png';

const globalMusic = props => (
    <div className={classes.GlobalMusic}>
        <h1>Global Music</h1>
        <section>
            <p>In order to learn more about traditional music from around the world, I started making my way through the Smithsonian Folkways National Archive. Quickly I found the process of adding albums to my Spotify playlists inefficient, so I decided to use Python to speed up the process. After filtering the albums by a specific country, some of the entries were irrelevant to me, such as compilations or modern albums. In order to quickly add interesting albums to Spotify I wrote a small program called spotify-select. The idea is that you simply highlight the album name you wish to add, copy it to your clipboard, and then enter a key combination which runs the script. The program then uses the Spotify API to search for albums containing the text in your clipboard. If multiple matches are found, the user is prompted via the command line to select the correct album.</p>
            <img src={GMScreenCap} style={{width: "100%"}}/>
            <p style={{textAlign: "center"}}>View spotify-select <a href="https://github.com/georgeharvey3/spotify-select">here.</a></p>
        </section>
        <section>
            <p>Using this method, I was quickly able to populate playlists and start listening. In order to gather information about the album, I created a second program global-music. Once the playlist had been filled, running this program would find the Smithsonian page for each album in the playlist and scrape relevant data from the website. This data is then collated into a Google Sheets document with an empty column - "Rating", which I fill in manually once I have listened to each album. As for visualising the albums' origins on a map, I needed co-ordinates in the spreadsheet. Unfortunately, the location field was rarely filled in on each album page, so I wrote code that would randomly generate co-ordinates within the album's country of origin. If I desired a greater level of geographic accuracy, I had to manually read through the album's liner notes to find information about where it had been recorded.</p>
            <img src={GMSheet} style={{width: "100%"}}/>
            <p style={{textAlign: "center"}}>Code for global-music can be viewed <a href="https://github.com/georgeharvey3/global-music">here.</a></p>
        </section>
        <section style={{textAlign: "center"}}>
            <p>Then I simply imported the data from the Google Sheets document into Google My Maps, and generated the map below (still a work in progress).</p>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1p8fmD2L-3E7FopzAUyzl8vQQLvUQrPr1" width="90%" height="600px"></iframe>
        </section>
    </div>
);

export default globalMusic;