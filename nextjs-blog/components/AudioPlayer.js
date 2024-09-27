import React from 'react';
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
import styles from '../styles/Home.module.scss';

const tracks = [
    {
        url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
        title: "Madza - Chords of Life",
        tags: ["house"],
    },
    {
        url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
        title: "Madza - Late Night Drive",
        tags: ["dnb"],
    },
    {
        url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
        title: "Madza - Persistence",
        tags: ["dubstep"],
    },
];

export default function AudioPlayer({ onClose }) {
    return (
        <div className={styles.audioPlayerSnackbar}>
            <button onClick={onClose}>Close</button>
            <Player
                trackList={tracks}
                includeTags={false}
                includeSearch={true}
                showPlaylist={false}
                sortTracks={false}
                autoPlayNextTrack={true}
            />
        </div>
    );
}