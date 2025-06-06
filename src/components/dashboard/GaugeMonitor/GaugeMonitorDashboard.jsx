import React from "react";

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
            {/* Placeholder for future content */}
            <div className="p-5">Content will be added here soon.</div>
        </div>
    );
}

export default GaugeMonitorDashboard;