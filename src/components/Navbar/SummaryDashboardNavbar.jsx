import React from 'react';

const SummaryDashboardNavbar = () => {
    const NavbarSubheadingColor = 'text-gray-500';
    return (
        <div className='bg-white text-black'>
            <nav className="mb-lg p-2 w-full flex items-center justify-between overflow-hidden">
                <div className='p-2 flex-shrink-0'>
                    <h1 className='font-semibold'>Summary Dashboard</h1>
                    <h2 className={`text-xs ${NavbarSubheadingColor}`}>Overview of all systems</h2>
                </div>
                <div className="flex items-center flex-shrink-0">
                    <span className={`text-sm font-semibold ${NavbarSubheadingColor} whitespace-nowrap overflow-hidden text-ellipsis max-w-xs`}>
                        Last Updated: 6:52:38 PM
                    </span>
                </div>
            </nav>
        </div>
    );
}

export default SummaryDashboardNavbar;
