import React from 'react';
import { HvHeader, HvIconContainer, HvHeaderBrand, HvHeaderActions, HvIconButton } from "@hitachivantara/uikit-react-core";
import { Time } from "@hitachivantara/uikit-react-icons";
import { FaThermometerHalf, FaCamera } from 'react-icons/fa';

const VerizonDashboardNavbar = () => {
    return (
        <div className='bg-blue-950 text-white'>
            <HvHeader position="relative" className="mb-lg p-2 w-full flex items-center justify-between overflow-hidden">
                <div className="flex items-center">
                    <HvIconContainer color="warning" size="sm">
                        <FaThermometerHalf className='text-yellow-600' />
                    </HvIconContainer>
                    <HvIconContainer size="sm">
                        <FaCamera className='text-blue-500' />
                    </HvIconContainer>
                </div>
                <div className='p-2 flex-shrink-0'>
                    <HvHeaderBrand name="Thermal & Gauge Monitoring System" className='font-semibold'/>
                    <HvHeaderBrand name="Real-time station sensor oversight" className='text-xs text-gray-300' />
                </div>
                <HvHeaderActions className="flex items-center flex-shrink-0">
                    <HvIconButton className="flex items-center">
                        <Time />
                    </HvIconButton>
                    <span className="text-sm font-semibold text-gray-300 whitespace-nowrap overflow-hidden text-ellipsis max-w-xs">
                            Last Updated: 6:52:38 PM
                    </span>
                </HvHeaderActions>
            </HvHeader>
        </div>
    );
}

export default VerizonDashboardNavbar;