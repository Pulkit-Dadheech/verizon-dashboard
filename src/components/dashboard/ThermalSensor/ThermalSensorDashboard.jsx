import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ThermalTable from './ThermalTable';

const ThermalSensorDashboard = () => {
  const [data, setData] = useState([]);
  const [displayCount, setDisplayCount] = useState(20);

  useEffect(() => {
    fetch('/thermal-data.json')
      .then(res => res.json())
      .then(setData);
  }, []);

  const chartData = data.slice(0, displayCount).map(row => ({
    time: `${row.Hour}:${row.Minute}`,
    tempmax: row.tempmax_attribute,
    tempavg: row.tempavg_attribute,
    tempmin: row.tempmin_attribute,
  }));

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="flex justify-between items-center mt-5 mx-5 mb-2">
        <div className="text-2xl font-bold">Thermal Sensor Dashboard</div>
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
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="mb-2 font-semibold">Thermal data</div>
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
            <LineChart data={chartData} margin={{ top: 20, right: 40, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis domain={['auto', 'auto']} />
              <Tooltip />
              <Legend />
              <Line type="linear" dataKey="tempmax" stroke="#1976d2" name="Max" dot={false} />
              <Line type="linear" dataKey="tempmin" stroke="#bdb76b" name="Min" dot={false} />
              <Line type="linear" dataKey="tempavg" stroke="#ff9800" name="Avg" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 mt-8">
          <div className="text-lg font-semibold mb-4">Historical Reading – Thermal Camera</div>
          <ThermalTable />
        </div>
      </div>
    </div>
  );
};

export default ThermalSensorDashboard;