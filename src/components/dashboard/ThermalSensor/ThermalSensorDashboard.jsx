import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Table from '../GaugeMonitor/Table';

const sampleData = [
  { time: '12:00 PM', max: 29, min: 25, avg: 27 },
  { time: '06:00 PM', max: 28, min: 24, avg: 26 },
  { time: '12:00 AM', max: 22, min: 18, avg: 20 },
  { time: '06:00 AM', max: 35, min: 30, avg: 32 },
  { time: '12:00 PM', max: 38, min: 33, avg: 35 },
  { time: '06:00 PM', max: 36, min: 32, avg: 34 },
  { time: '12:00 AM', max: 32, min: 28, avg: 30 },
  { time: '06:00 AM', max: 28, min: 24, avg: 26 },
  { time: '12:00 PM', max: 26, min: 22, avg: 24 },
];

const ThermalSensorDashboard = () => {
    const [selected, setSelected] = useState({ max: true, min: true, avg: true });
    return (
        <div className="min-h-screen bg-white text-black">
            <div className="flex justify-between items-center mt-5 mx-5 mb-2">
                <div className="text-2xl font-bold">Thermal Sensor Dashboard</div>
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
                <div className="bg-white rounded-lg shadow-lg p-4">
                    <div className="mb-2 font-semibold">Thermal data</div>
                    <div className="mb-4 flex flex-col gap-1">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" checked={selected.max} onChange={() => setSelected(s => ({...s, max: !s.max}))} />
                            Max Data
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" checked={selected.min} onChange={() => setSelected(s => ({...s, min: !s.min}))} />
                            Min Data
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" checked={selected.avg} onChange={() => setSelected(s => ({...s, avg: !s.avg}))} />
                            Avg Data
                        </label>
                    </div>
                    <div className="bg-white rounded shadow p-2">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={sampleData} margin={{ top: 20, right: 40, left: 0, bottom: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="time" />
                                <YAxis domain={[10, 40]} />
                                <Tooltip />
                                <Legend />
                                {selected.max && <Line type="linear" dataKey="max" stroke="#1976d2" name="tempmax_attribute" dot={false} />}
                                {selected.min && <Line type="linear" dataKey="min" stroke="#bdb76b" name="tempmin_attribute" dot={false} />}
                                {selected.avg && <Line type="linear" dataKey="avg" stroke="#ff9800" name="tempavg_attribute" dot={false} />}
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-4 mt-8">
                    <div className="text-lg font-semibold mb-4">Historical Reading – Thermal Camera</div>
                    <Table />
                </div>
            </div>
        </div>
    );
}
export default ThermalSensorDashboard;