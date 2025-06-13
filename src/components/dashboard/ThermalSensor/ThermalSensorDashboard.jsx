import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import ThermalTable from "./ThermalTable";
import { HvButton } from "@hitachivantara/uikit-react-core";
import { Refresh } from "@hitachivantara/uikit-react-icons";

const dashboardColor = { bg: "bg-gray-100", text: "text-black" };
const dashboardButtonColor = "bg-white";

const FILTERS = [
  { label: "Last Hour", value: "1h" },
  { label: "Last 12 Hours", value: "12h" },
  { label: "Last 24 Hours", value: "24h" },
  { label: "Last Week", value: "7d" },
  { label: "Last 30 Days", value: "30d" },
];

function filterData(data, filter) {
  if (!data.length) return [];
  const last = data[data.length - 1];
  const lastDate = new Date(
    last.Year,
    last.Month - 1,
    last.Day,
    last.Hour,
    last.Minute
  );
  let cutoff = new Date(lastDate);

  switch (filter) {
    case "1h":
      cutoff.setHours(cutoff.getHours() - 1);
      break;
    case "12h":
      cutoff.setHours(cutoff.getHours() - 12);
      break;
    case "24h":
      cutoff.setHours(cutoff.getHours() - 24);
      break;
    case "7d":
      cutoff.setDate(cutoff.getDate() - 7);
      break;
    case "30d":
      cutoff.setDate(cutoff.getDate() - 30);
      break;
    default:
      return data;
  }

  return data.filter((row) => {
    const rowDate = new Date(
      row.Year,
      row.Month - 1,
      row.Day,
      row.Hour,
      row.Minute
    );
    return rowDate >= cutoff && rowDate <= lastDate;
  });
}

const ThermalSensorDashboard = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("12h");
  const [showDropdown, setShowDropdown] = useState(false);
  const [tableFilter, setTableFilter] = useState("12h");
  const [showTableDropdown, setShowTableDropdown] = useState(false);

  useEffect(() => {
    fetch("/thermal-data.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  const filteredData = filterData(data, filter);
  const filteredTableData = filterData(data, tableFilter);

  const chartData = filteredData.map((row) => ({
    time: `${row.Hour}:${row.Minute}`,
    tempmax: row.tempmax_attribute,
    tempavg: row.tempavg_attribute,
    tempmin: row.tempmin_attribute,
  }));

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <div className="flex justify-between items-center mt-5 mx-5 mb-2">
        <div className={`text-2xl font-bold ${dashboardColor.bg}`}>
          Thermal Sensor Dashboard
        </div>
        <div
          className={`flex items-center rounded-lg shadow-lg ${dashboardButtonColor}`}
        >
          <HvButton
            variant="primary"
            size="md"
            radius="round"
            disabled={false}
            className={`m-2 rounded-lg text-white ${dashboardColor.bg}`}
            startIcon={<Refresh className={dashboardColor.text} />}
          >
            <div className={`${dashboardColor.text} text-sm font-semibold`}>
              Refresh Data
            </div>
          </HvButton>
        </div>
      </div>
      <div className="p-5">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="mb-2 font-semibold">Thermal Data</div>
            <div className="relative">
              <button
                className="bg-blue-700 text-white px-4 py-2 rounded shadow"
                onClick={() => setShowDropdown((v) => !v)}
              >
                Filter
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow z-10">
                  {FILTERS.map((f) => (
                    <div
                      key={f.value}
                      className={`px-4 py-2 cursor-pointer hover:bg-blue-100 ${
                        filter === f.value ? "font-bold text-blue-700" : ""
                      }`}
                      onClick={() => {
                        setFilter(f.value);
                        setShowDropdown(false);
                      }}
                    >
                      {f.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={chartData}
              margin={{ top: 20, right: 40, left: 0, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis domain={["auto", "auto"]} />
              <Tooltip />
              <Legend />
              <Line
                type="linear"
                dataKey="tempmax"
                stroke="#1976d2"
                name="Max"
                dot={false}
              />
              <Line
                type="linear"
                dataKey="tempmin"
                stroke="#bdb76b"
                name="Min"
                dot={false}
              />
              <Line
                type="linear"
                dataKey="tempavg"
                stroke="#ff9800"
                name="Avg"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 mt-8">
          <div className="flex justify-between items-center mb-4">
            <div className="text-lg font-semibold">
              Historical Reading – Thermal Camera
            </div>
            <div className="relative">
              <button
                className="bg-blue-700 text-white px-4 py-2 rounded shadow"
                onClick={() => setShowTableDropdown((v) => !v)}
              >
                Filter
              </button>
              {showTableDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow z-10">
                  {FILTERS.map((f) => (
                    <div
                      key={f.value}
                      className={`px-4 py-2 cursor-pointer hover:bg-blue-100 ${
                        tableFilter === f.value ? "font-bold text-blue-700" : ""
                      }`}
                      onClick={() => {
                        setTableFilter(f.value);
                        setShowTableDropdown(false);
                      }}
                    >
                      {f.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <ThermalTable data={filteredTableData} />
        </div>
      </div>
    </div>
  );
};

export default ThermalSensorDashboard;
