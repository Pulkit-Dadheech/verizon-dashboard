import React from "react";

const GaugeTable = ({ data = [] }) => {
  if (!data.length) return <div className="p-4">No records to display</div>;

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full border border-gray-300 bg-white">
        <thead>
          <tr>
            <th className="border px-2 py-1 bg-yellow-300 text-center">Date</th>
            <th className="border px-2 py-1 bg-yellow-300 text-center">Timestamp</th>
            <th className="border px-2 py-1 bg-blue-200 text-center">gauge_temp</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => {
            const date = `${row.Year}-${String(row.Month).padStart(2,'0')}-${String(row.Day).padStart(2,'0')}`;
            const timestamp = `${String(row.Hour).padStart(2,'0')}:${String(row.Minute).padStart(2,'0')}`;
            return (
              <tr key={idx} className={idx % 2 ? "bg-white" : "bg-gray-50"}>
                <td className="border px-2 py-1 text-center">{date}</td>
                <td className="border px-2 py-1 text-center">{timestamp}</td>
                <td className="border px-2 py-1 text-center">{row.gauge_temp}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GaugeTable;