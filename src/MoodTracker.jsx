import React, { useState, useEffect } from "react";
import axios from "axios";
import MoodChart from "./MoodChart"; // Reuse this for displaying

function MoodTracker() {
  const [mood, setMood] = useState(3);
  const [data, setData] = useState([]);

  const today = new Date().toLocaleString('en-US', { weekday: 'short' });

  const handleSubmit = async () => {
    await axios.post("http://localhost:8000/mood/", { day: today, mood });
    fetchMoods(); // refresh chart
  };

  const fetchMoods = async () => {
    const res = await axios.get("http://localhost:8000/mood/");
    setData(res.data);
  };

  useEffect(() => {
    fetchMoods();
  }, []);

  return (
    <div style={{ marginTop: "2rem", textAlign: "center" }}>
      <h2>📝 How's your mood today?</h2>
      <input
        type="range"
        min="1"
        max="5"
        value={mood}
        onChange={(e) => setMood(Number(e.target.value))}
      />
      <p>Selected Mood: {mood}</p>
      <button onClick={handleSubmit}>Save Mood</button>
      <MoodChart moodData={data} />
    </div>
  );
}

export default MoodTracker;
