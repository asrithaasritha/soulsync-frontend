import React from "react";
import './App.css';
import JournalEntry from "./JournalEntry";
import MoodChart from "./MoodChart";
import Meditation from "./Meditation";
import MoodTracker from "./MoodTracker";

function App() {
  return (
    <div className="container">
      <h1>SoulSync 🧠 Emotional Companion</h1>
      <JournalEntry />
      <MoodTracker /> 
      <MoodChart /> 
      <Meditation />
    </div>
  );
}

export default App;
