import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Table from './Table';

const data = [
  { time: '3AM', value: 40 },
  { time: '4AM', value: 30 },
  { time: '5AM', value: 20 },
  { time: '6AM', value: 27 },
  { time: '7AM', value: 18 },
  { time: '8AM', value: 23 },
  { time: '9AM', value: 34 },
];

const GaugeMonitorDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-black">
            <div className="flex justify-between items-center mt-5 mx-5 mb-2">
                <div className="text-2xl font-bold">Gauge Monitor Dashboard</div>
                <div className="flex items-center rounded-lg shadow-lg bg-white">
                    <button
                        className="m-2 rounded-lg text-white bg-blue-500 px-4 py-2"
                        disabled={false}
                    >
                        Refresh Data
                    </button>
                </div>
            </div>
            <div className="p-5">
                <div className="bg-white rounded-lg shadow-lg p-5">
                    <div className="text-lg font-semibold mb-4">Analog Gauge</div>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="time" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="linear" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-5 mt-8">
                    <div className="text-lg font-semibold mb-4">Historical Reading – Gauge Readings</div>
                    <Table />
                </div>
            </div>
        </div>
    );
}

export default GaugeMonitorDashboard;