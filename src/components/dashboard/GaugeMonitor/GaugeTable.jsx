import React, { useEffect, useState } from "react";

const GaugeTable = ({ data = [] }) => {
  // Calculate rowSpans for each grouping
  const getRowSpans = (data, keyList) => {
    const spans = [];
    let prev = {};
    let count = {};
    data.forEach((row, idx) => {
      keyList.forEach(key => {
        if (row[key] !== prev[key]) {
          // Count how many rows this value will span
          let span = 1;
          for (let j = idx + 1; j < data.length; j++) {
            if (data[j][key] === row[key] &&
                keyList.every((k, i) => i < keyList.indexOf(key) ? data[j][k] === row[k] : true)) {
              span++;
            } else {
              break;
            }
          }
          spans[idx] = spans[idx] || {};
          spans[idx][key] = span;
        }
        prev[key] = row[key];
      });
    });
    return spans;
  };

  const keyList = ["Year", "Month", "Day", "Hour"];
  const rowSpans = getRowSpans(data, keyList);

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
              {keyList.map(key =>
                rowSpans[idx] && rowSpans[idx][key] ? (
                  <td
                    key={key}
                    className="border px-2 py-1 text-center align-middle"
                    rowSpan={rowSpans[idx][key]}
                  >
                    {row[key]}
                  </td>
                ) : null
              )}
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