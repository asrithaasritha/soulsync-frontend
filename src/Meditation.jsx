import React, { useRef, useState, useEffect } from "react";
import "./Meditation.css";

function Meditation() {
  const audioPlayer = useRef(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const playlist = [
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  ];

  useEffect(() => {
    if (audioPlayer.current) {
      audioPlayer.current.src = playlist[currentTrack];
    }
  }, [currentTrack]);

  const handleAudioEnd = () => {
    const nextTrack = (currentTrack + 1) % playlist.length;
    setCurrentTrack(nextTrack);
    audioPlayer.current.src = playlist[nextTrack];
    audioPlayer.current.play();
  };

  return (
    <div className={`meditation-container ${isDarkMode ? "dark" : "light"}`}>
      <button className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <div className="card">
        <h2>🧘‍♀️ Guided Meditation</h2>
        <p>Take a few minutes to relax, breathe, and center yourself.</p>
      </div>

      <div className="card meditation-videos">
        <iframe src="https://www.youtube.com/embed/inpok4MKVLM" title="10-Minute Meditation" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        <iframe src="https://www.youtube.com/embed/z6X5oEIg6Ak" title="5-Minute Mindfulness" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        <iframe src="https://www.youtube.com/embed/O-6f5wQXSu8" title="Relaxing Body Scan" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        <iframe src="https://www.youtube.com/embed/MIr3RsUWrdo" title="Evening Wind Down" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        <iframe src="https://www.youtube.com/embed/1vx8iUvfyCY" title="Deep Sleep Meditation" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        <iframe src="https://www.youtube.com/embed/w0nV3yNXt7o" title="Guided Meditation for Anxiety & Stress" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>

      <div className="card meditation-audio">
        <h4>🎶 Background Relaxation Music</h4>
        <audio ref={audioPlayer} controls onEnded={handleAudioEnd} />
      </div>
    </div>
  );
}

export default Meditation;
