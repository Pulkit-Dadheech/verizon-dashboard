import React, { useMemo, useEffect, useState } from "react";

// Helper to calculate rowspans for each group
function getRowSpans(data) {
  const yearMap = {};
  data.forEach(row => {
    if (!yearMap[row.Year]) yearMap[row.Year] = [];
    yearMap[row.Year].push(row);
  });
  const result = [];
  Object.entries(yearMap).forEach(([year, yearRows]) => {
    const monthMap = {};
    yearRows.forEach(row => {
      if (!monthMap[row.Month]) monthMap[row.Month] = [];
      monthMap[row.Month].push(row);
    });
    Object.entries(monthMap).forEach(([month, monthRows]) => {
      const dayMap = {};
      monthRows.forEach(row => {
        if (!dayMap[row.Day]) dayMap[row.Day] = [];
        dayMap[row.Day].push(row);
      });
      Object.entries(dayMap).forEach(([day, dayRows]) => {
        const hourMap = {};
        dayRows.forEach(row => {
          if (!hourMap[row.Hour]) hourMap[row.Hour] = [];
          hourMap[row.Hour].push(row);
        });
        Object.entries(hourMap).forEach(([hour, hourRows]) => {
          hourRows.forEach((row, i) => {
            result.push({
              ...row,
              yearRowSpan: i === 0 && result.filter(r => r.Year === row.Year).length === 0 ? yearRows.length : 0,
              monthRowSpan: i === 0 && result.filter(r => r.Year === row.Year && r.Month === row.Month).length === 0 ? monthRows.length : 0,
              dayRowSpan: i === 0 && result.filter(r => r.Year === row.Year && r.Month === row.Month && r.Day === row.Day).length === 0 ? dayRows.length : 0,
              hourRowSpan: i === 0 ? hourRows.length : 0,
            });
          });
        });
      });
    });
  });
  return result;
}

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/verizon-data.json')
      .then(res => res.json())
      .then(setData);
  }, []);

  const rowsWithSpans = useMemo(() => getRowSpans(data), [data]);

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
            <th className="border px-2 py-1 bg-blue-200 text-center">tempmax_attribute</th>
            <th className="border px-2 py-1 bg-blue-200 text-center">tempavg_attribute</th>
            <th className="border px-2 py-1 bg-blue-200 text-center">tempmin_attribute</th>
          </tr>
        </thead>
        <tbody>
          {rowsWithSpans.map((row, idx) => (
            <tr key={idx}>
              {row.yearRowSpan > 0 && (
                <td className="border px-2 py-1 align-middle text-center" rowSpan={row.yearRowSpan}>{row.Year}</td>
              )}
              {row.monthRowSpan > 0 && (
                <td className="border px-2 py-1 align-middle text-center" rowSpan={row.monthRowSpan}>{row.Month}</td>
              )}
              {row.dayRowSpan > 0 && (
                <td className="border px-2 py-1 align-middle text-center" rowSpan={row.dayRowSpan}>{row.Day}</td>
              )}
              {row.hourRowSpan > 0 && (
                <td className="border px-2 py-1 align-middle text-center" rowSpan={row.hourRowSpan}>{row.Hour}</td>
              )}
              <td className="border px-2 py-1 text-center">{row.Minute}</td>
              <td className="border px-2 py-1 text-center">{row.tempmax_attribute}</td>
              <td className="border px-2 py-1 text-center">{row.tempavg_attribute}</td>
              <td className="border px-2 py-1 text-center">{row.tempmin_attribute}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
