import React from 'react';
import Navbar from './Navbar';
import { HvButton } from '@hitachivantara/uikit-react-core';
import { Refresh } from '@hitachivantara/uikit-react-icons';
import { FaThermometerHalf, FaExclamationTriangle, FaClock, FaArrowUp } from 'react-icons/fa';
import DashboardCards from './DashboardCards';

const Dashboard = () => {
    return (
        <div className='bg-gradient-to-r from-blue-950 to-blue-900 min-h-screen'>
            <Navbar />
            {/* <DashboardCards/> */}
            {/* Station Monitoring Dashboard */}
            <div className='flex justify-between m-5'>
                <div className='text-2xl font-bold text-white'>Station Monitoring Dashboard</div>
                <div className='flex items-center bg-blue-950 rounded-lg shadow-lg'>
                    <HvButton
                        variant="primary"
                        size="md"
                        radius="round"
                        disabled={false}
                        className='m-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white'
                        startIcon={<Refresh className={'text-white'} />}
                    >
                        <div className='text-white text-sm font-semibold'>Refresh Data</div>
                    </HvButton>
                </div>
            </div>

            {/* Dashboard Cards */}
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 m-5'>
                {/* Active vs. Inactive Sensors */}
                <div className='bg-blue-950 p-5 rounded-xl shadow-lg text-white flex flex-col justify-between min-h-[220px]'>
                    <div className="flex items-center gap-2 mb-2">
                        <FaExclamationTriangle className="text-gray-300 text-base" />
                        <span className='text-sm font-semibold text-gray-200'>Active vs. Inactive Sensors</span>
                    </div>
                    <div>
                        <div className='flex flex-row justify-between items-end mb-4 mt-2'>
                            <div className='text-3xl font-bold text-green-400'>247</div>
                            <div className='text-sm text-gray-400'>Active</div>
                        </div>
                        <div className='flex flex-row justify-between items-end mb-2 mt-4'>
                            <div className='text-xl font-semibold text-red-400'>13</div>
                            <div className='text-sm text-gray-400'>Inactive</div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-4'>
                        <span className='text-sm text-gray-300'>Uptime</span>
                        <span className='text-blue-400 font-semibold text-base'>95.0%</span>
                    </div>
                </div>

                {/* Temperature Analytics */}
                <div className='bg-blue-950 p-5 rounded-xl shadow-lg text-white flex flex-col justify-between min-h-[220px]'>
                    <div className="flex items-center gap-2 mb-2">
                        <FaThermometerHalf className="text-gray-300 text-base" />
                        <span className='text-sm font-semibold text-gray-200'>Temperature Analytics</span>
                    </div>
                    <div>
                        <div className='flex flex-row justify-between items-end mb-4 mt-2'>
                            <div className='text-sm text-gray-400'>Max Temp</div>
                            <div className='text-3xl font-bold text-orange-400'>78.5°C</div>
                        </div>
                        <div className='flex flex-row justify-between items-end mt-3 mb-2'>
                            <div className='text-sm text-gray-400'>Avg Temp</div>
                            <div className='text-xl font-bold text-blue-400'>45.2°C</div>
                        </div>
                    </div>
                    {/* Horizontal bar */}
                    <div className="mt-4">
                        <div className="w-full rounded bg-gray-700 overflow-hidden">
                            <div className="h-2 rounded bg-gradient-to-r from-orange-400 to-blue-400" style={{ width: '60%' }} />
                        </div>
                    </div>
                </div>

                {/* High Temp Alerts */}
                <div className='bg-blue-950 p-5 rounded-xl shadow-lg text-white flex flex-col justify-between min-h-[220px]'>
                    <div className="flex items-center gap-2 mb-2">
                        <FaExclamationTriangle className="text-gray-300 text-base" />
                        <span className='text-sm font-semibold text-gray-200'>High Temp Alerts</span>
                    </div>
                    <div className='flex justify-between items-end'>
                        <div>
                            <div className='text-3xl font-bold text-yellow-400'>12</div>
                        </div>
                        <div className='text-sm text-gray-300'>Triggered</div>
                    </div>
                    <div className='flex items-center mt-3'>
                        <FaArrowUp className="text-red-400 mr-2" />
                        <span className='text-red-400 text-sm font-semibold'>+3 from yesterday</span>
                    </div>
                    <hr className='border-t border-gray-600 my-4' />
                    <div className='text-sm text-gray-400'>Safety threshold exceeded</div>
                </div>

                {/* Unresolved Outages */}
                <div className='bg-blue-950 p-5 rounded-xl shadow-lg text-white flex flex-col justify-between min-h-[220px]'>
                    <div className="flex items-center gap-2 mb-2">
                        <FaExclamationTriangle className="text-gray-300 text-base" />
                        <span className='text-sm font-semibold text-gray-200'>Unresolved Outages</span>
                    </div>
                    <div className='flex justify-between items-end'>
                        <div>
                            <div className='text-3xl font-bold text-red-400'>5</div>
                        </div>
                        <div className='text-sm text-gray-300'>Active</div>
                    </div>
                    <div className='flex items-center mt-3'>
                        <FaClock className='text-blue-400 mr-2' />
                        <span className='text-sm text-blue-300'>Avg: 2.4h</span>
                    </div>
                    <hr className='border-t border-gray-600 my-4' />
                    <div className='text-sm text-gray-400'>Pending resolution</div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;