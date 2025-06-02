import React from 'react';
import Navbar from './VerizonDashboardNavbar';
import { HvButton } from '@hitachivantara/uikit-react-core';
import { Refresh } from '@hitachivantara/uikit-react-icons';
import { FaThermometerHalf, FaExclamationTriangle, FaClock, FaArrowUp } from 'react-icons/fa';
import DashboardCards from './DashboardCards';

const Dashboard = () => {
    return (
        <div className='bg-gradient-to-r from-blue-950 to-blue-900 min-h-screen'>
            <Navbar />
            {/* Station Monitoring Dashboard */}
            <div className='flex justify-between items-center mt-5 mx-5 mb-2'>
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
            <DashboardCards />
        </div>
    );
};

export default Dashboard;