import React, { useEffect, useState } from "react";

const GaugeTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/gauge-data.json')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full border border-gray-300 bg-white">
        <thead>
          <tr>
            <th className="border px-2 py-1 bg-yellow-300 text-center">Year</th>
            <th className="border px-2 py-1 bg-yellow-300 text-center">Month</th>
            <th className="border px-2 py-1 bg-yellow-300 text-center">Day</th>
            <th className="border px-2 py-1 bg-yellow-300 text-center">Hour</th>
            <th className="border px-2 py-1 bg-yellow-300 text-center">Minute</th>
            <th className="border px-2 py-1 bg-blue-200 text-center">Gauge Temp</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td className="border px-2 py-1 text-center">{row.Year}</td>
              <td className="border px-2 py-1 text-center">{row.Month}</td>
              <td className="border px-2 py-1 text-center">{row.Day}</td>
              <td className="border px-2 py-1 text-center">{row.Hour}</td>
              <td className="border px-2 py-1 text-center">{row.Minute}</td>
              <td className="border px-2 py-1 text-center">{row.gauge_temp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GaugeTable;