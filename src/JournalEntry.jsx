import { useEffect, useState } from "react";
import axios from "axios";

function JournalEntry() {
  const [entry, setEntry] = useState("");
  const [reflection, setReflection] = useState("");
  const [logs, setLogs] = useState([]);

  // Fetch logs on component mount
  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      const res = await axios.get("http://localhost:8000/journal/log/");
      setLogs(res.data);
    } catch (err) {
      console.error("❌ Error fetching logs:", err);
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/journal/",
        new URLSearchParams({ entry }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setReflection(res.data.reflection);
      setEntry(""); // Clear the input
      fetchLogs(); // Refresh log
    } catch (err) {
      console.error("❌ Submission Error:", err);
      setReflection("⚠️ Something went wrong. Please try again.");
    }
  };

  const clearLogs = async () => {
    try {
      await axios.delete("http://localhost:8000/journal/log/clear");
      alert("✅ All journal logs cleared!");
      setLogs([]);
    } catch (err) {
      console.error("❌ Failed to clear logs", err);
      alert("⚠️ Failed to clear logs.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Journal Entry 📝</h2>
      <textarea
        rows="5"
        cols="60"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="How are you feeling today?"
        style={{ padding: "10px", fontSize: "16px", width: "100%" }}
      />
      <br />
      <button
        onClick={handleSubmit}
        style={{
          marginTop: "10px",
          padding: "8px 16px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Submit
      </button>

      {reflection && (
        <div style={{ marginTop: "20px" }}>
          <h4>🧠 AI Reflection</h4>
          <p>{reflection}</p>
        </div>
      )}

      {logs.length > 0 && (
        <div style={{ marginTop: "30px" }}>
          <h3>📚 Journal Log</h3>
          {logs.map((item, index) => (
            <div key={index} style={{ marginBottom: "15px" }}>
              <p><strong>Entry:</strong> {item.entry}</p>
              <p><strong>Reflection:</strong> {item.reflection}</p>
            </div>
          ))}
          <button
            onClick={clearLogs}
            style={{
              marginTop: "10px",
              padding: "8px 16px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            🗑️ Clear All Logs
          </button>
        </div>
      )}
    </div>
  );
}

export default JournalEntry;
