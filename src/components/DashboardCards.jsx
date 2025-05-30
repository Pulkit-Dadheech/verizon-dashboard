import React from 'react'
import { HvSection, HvTypography } from "@hitachivantara/uikit-react-core";
import { HvDashboard } from "@hitachivantara/uikit-react-lab";
import { FaExclamationTriangle } from 'react-icons/fa';


const DashboardCards = () => {
  return (
    <HvDashboard
      layout={[
        { i: "1", x: 0, y: 0, w: 6, h: 1, isResizable: false },
        { i: "2", x: 6, y: 0, w: 6, h: 1, isResizable: false },
        { i: "3", x: 0, y: 1, w: 6, h: 1, isResizable: false },
        { i: "4", x: 6, y: 1, w: 6, h: 1, isResizable: false },
      ]}
    >
      <HvSection
        className='bg-blue-950 '
        key="1"
        title={<div className="flex items-center gap-2 mb-2">
            <FaExclamationTriangle className="text-gray-300 text-base" />
            <span className='text-sm font-semibold text-gray-200'>Active vs. Inactive Sensors</span>
        </div>}
      >
        <div className='bg-blue-950'>
            
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
      </HvSection>
      <HvSection
        key="2"
        title={<HvTypography variant="title3">Temperature Analytics</HvTypography>}
      >
        {/* Content for section 2 */}
      </HvSection>
      <HvSection
        key="3"
        title={<HvTypography variant="title3">High Temp Alerts</HvTypography>}
      >
        {/* Content for section 3 */}
      </HvSection>
      <HvSection
        key="4"
        title={<HvTypography variant="title3">Unresolved Outages</HvTypography>}
      >
        {/* Content for section 4 */}
      </HvSection>
    </HvDashboard>
  );
};

export default DashboardCards;