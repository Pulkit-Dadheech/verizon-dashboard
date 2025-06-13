import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import GaugeTable from './GaugeTable';

const GaugeMonitorDashboard = () => {
  const [data, setData] = useState([]);
  const [displayCount, setDisplayCount] = useState(20);

  useEffect(() => {
    fetch('/gauge-data.json')
      .then(res => res.json())
      .then(setData);
  }, []);

  // Prepare data for the graph
  const chartData = data.slice(0, displayCount).map(row => ({
    time: `${row.Hour}:${row.Minute}`,
    gauge_temp: row.gauge_temp,
  }));

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <div className="flex justify-between items-center mt-5 mx-5 mb-2">
        <div className="text-2xl font-bold">Gauge Monitor Dashboard</div>
        <div className="flex items-center rounded-lg shadow-lg bg-white">
          <button
            className="m-2 rounded-lg text-white bg-blue-500 px-4 py-2"
            disabled={false}
            onClick={() => setData([...data])}
          >
            Refresh Data
          </button>
        </div>
      </div>
      <div className="p-5">
        <div className="bg-white rounded-lg shadow-lg p-5">
          <div className="flex justify-between items-center mb-4">
            <div className="text-lg font-semibold">Analog Gauge</div>
            <div>
              <label className="mr-2 text-sm">Show last</label>
              <select
                value={displayCount}
                onChange={e => setDisplayCount(Number(e.target.value))}
                className="border rounded px-2 py-1 text-sm"
              >
                {[10, 20, 30, 50, 100, data.length].map(n => (
                  <option key={n} value={n}>{n === data.length ? "All" : n}</option>
                ))}
              </select>
              <span className="ml-1 text-sm">records</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="linear" dataKey="gauge_temp" stroke="#1976d2" name="Gauge Temp" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-5 mt-8">
          <div className="text-lg font-semibold mb-4">Historical Reading – Gauge Readings</div>
          <GaugeTable />
        </div>
      </div>
    </div>
  );
};

export default GaugeMonitorDashboard;