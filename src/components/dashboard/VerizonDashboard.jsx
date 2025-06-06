import React from 'react';
import Navbar from '../Navbar/VerizonDashboardNavbar';
import { HvButton } from '@hitachivantara/uikit-react-core';
import { Refresh } from '@hitachivantara/uikit-react-icons';
import { FaThermometerHalf, FaExclamationTriangle, FaClock, FaArrowUp } from 'react-icons/fa';
import DashboardCards from '../DashboardCards';

const dashboardColor = {bg: 'bg-gray-100', text: 'text-black'};
const dashboardButtonColor = 'bg-white';

const VerizonDashboard = () => {
    return (
        <div className={`min-h-screen ${dashboardColor.bg} ${dashboardColor.text}`}>
            <Navbar />
            {/* Station Monitoring Dashboard */}
            <div className='flex justify-between items-center mt-5 mx-5 mb-2'>
                <div className={`text-2xl font-bold ${dashboardColor.bg}`}>Station Monitoring Dashboard</div>
                <div className={`flex items-center rounded-lg shadow-lg ${dashboardButtonColor}` }>
                    <HvButton
                        variant="primary"
                        size="md"
                        radius="round"
                        disabled={false}
                        className={`m-2 rounded-lg text-white ${dashboardColor.bg}`}
                        startIcon={<Refresh className={dashboardColor.text} />}
                    >
                        <div className={`${dashboardColor.text} text-sm font-semibold`}>Refresh Data</div>
                    </HvButton>
                </div>
            </div>

            {/* Dashboard Cards */}
            <DashboardCards />
        </div>
    );
};

export default VerizonDashboard;