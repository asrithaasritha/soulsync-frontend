import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line
} from "recharts";

// Sample data
const data = [
  { day: "Mon", mood: 3 },
  { day: "Tue", mood: 4 },
  { day: "Wed", mood: 2 },
  { day: "Thu", mood: 5 },
  { day: "Fri", mood: 3 },
  { day: "Sat", mood: 4 },
  { day: "Sun", mood: 5 }
];

const MoodChart = () => {
  return (
    <div>
      <h2>📊 Mood Tracker (Past Week)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="day" />
          <YAxis domain={[0, 5]} />
          <Tooltip />
          <Line type="monotone" dataKey="mood" stroke="#82ca9d" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MoodChart;
