import React from "react";

const tableData = [
  { year: 2023, month: 2, day: 13, hour: 16, minute: 8, second: 7, digital_counter_at: 89 },
  { year: 2023, month: 2, day: 13, hour: 16, minute: 59, second: 41, digital_counter_at: 89 },
  { year: 2023, month: 2, day: 13, hour: 16, minute: 20, second: 15, digital_counter_at: 89 },
  { year: 2023, month: 2, day: 13, hour: 16, minute: 30, second: 33, digital_counter_at: 89 },
  { year: 2023, month: 2, day: 13, hour: 16, minute: 40, second: 52, digital_counter_at: 89 },
  { year: 2023, month: 2, day: 13, hour: 16, minute: 51, second: 9, digital_counter_at: 89 },
  { year: 2023, month: 2, day: 13, hour: 17, minute: 35, second: 50, digital_counter_at: 89 },
  { year: 2023, month: 2, day: 13, hour: 17, minute: 46, second: 7, digital_counter_at: 89 },
  { year: 2023, month: 2, day: 13, hour: 17, minute: 56, second: 25, digital_counter_at: 89 },
  { year: 2023, month: 2, day: 14, hour: 7, minute: 6, second: 43, digital_counter_at: 89 },
  { year: 2023, month: 2, day: 14, hour: 7, minute: 17, second: 2, digital_counter_at: 89 },
  { year: 2023, month: 2, day: 14, hour: 7, minute: 27, second: 20, digital_counter_at: 89 },
  { year: 2023, month: 2, day: 14, hour: 7, minute: 37, second: 37, digital_counter_at: 89 },
  { year: 2023, month: 2, day: 14, hour: 7, minute: 47, second: 57, digital_counter_at: 89 },
];

// Helper to calculate rowspans for each group
function getRowSpans(data) {
  const yearMap = {};
  data.forEach(row => {
    if (!yearMap[row.year]) yearMap[row.year] = [];
    yearMap[row.year].push(row);
  });
  const result = [];
  Object.entries(yearMap).forEach(([year, yearRows]) => {
    const monthMap = {};
    yearRows.forEach(row => {
      if (!monthMap[row.month]) monthMap[row.month] = [];
      monthMap[row.month].push(row);
    });
    Object.entries(monthMap).forEach(([month, monthRows]) => {
      const dayMap = {};
      monthRows.forEach(row => {
        if (!dayMap[row.day]) dayMap[row.day] = [];
        dayMap[row.day].push(row);
      });
      Object.entries(dayMap).forEach(([day, dayRows]) => {
        const hourMap = {};
        dayRows.forEach(row => {
          if (!hourMap[row.hour]) hourMap[row.hour] = [];
          hourMap[row.hour].push(row);
        });
        Object.entries(hourMap).forEach(([hour, hourRows]) => {
          hourRows.forEach((row, i) => {
            result.push({
              ...row,
              yearRowSpan: i === 0 && result.filter(r => r.year === row.year).length === 0 ? yearRows.length : 0,
              monthRowSpan: i === 0 && result.filter(r => r.year === row.year && r.month === row.month).length === 0 ? monthRows.length : 0,
              dayRowSpan: i === 0 && result.filter(r => r.year === row.year && r.month === row.month && r.day === row.day).length === 0 ? dayRows.length : 0,
              hourRowSpan: i === 0 ? hourRows.length : 0,
              isFirstYear: i === 0 && result.filter(r => r.year === row.year).length === 0,
              isFirstMonth: i === 0 && result.filter(r => r.year === row.year && r.month === row.month).length === 0,
              isFirstDay: i === 0 && result.filter(r => r.year === row.year && r.month === row.month && r.day === row.day).length === 0,
              isFirstHour: i === 0,
            });
          });
        });
      });
    });
  });
  return result;
}

const rowsWithSpans = getRowSpans(tableData);

const Table = () => (
  <div className="overflow-x-auto p-4">
    <table className="min-w-full border border-gray-300 bg-white">
      <thead>
        <tr>
          <th className="border px-2 py-1 bg-yellow-300 text-center">Year</th>
          <th className="border px-2 py-1 bg-yellow-300 text-center">Month</th>
          <th className="border px-2 py-1 bg-yellow-300 text-center">Day</th>
          <th className="border px-2 py-1 bg-yellow-300 text-center">Hour</th>
          <th className="border px-2 py-1 bg-yellow-300 text-center">Minute</th>
          <th className="border px-2 py-1 bg-yellow-300 text-center">Second</th>
          <th className="border px-2 py-1 bg-blue-200 text-center">digital_counter_at</th>
        </tr>
      </thead>
      <tbody>
        {rowsWithSpans.map((row, idx) => (
          <tr key={idx}>
            {row.yearRowSpan > 0 && (
              <td className="border px-2 py-1 align-middle text-center" rowSpan={row.yearRowSpan}>{row.year}</td>
            )}
            {row.monthRowSpan > 0 && (
              <td className="border px-2 py-1 align-middle text-center" rowSpan={row.monthRowSpan}>{row.month}</td>
            )}
            {row.dayRowSpan > 0 && (
              <td className="border px-2 py-1 align-middle text-center" rowSpan={row.dayRowSpan}>{row.day}</td>
            )}
            {row.hourRowSpan > 0 && (
              <td className="border px-2 py-1 align-middle text-center" rowSpan={row.hourRowSpan}>{row.hour}</td>
            )}
            <td className="border px-2 py-1 text-center">{row.minute}</td>
            <td className="border px-2 py-1 text-center">{row.second}</td>
            <td className="border px-2 py-1 text-center">{row.digital_counter_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
