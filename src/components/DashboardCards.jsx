import React from 'react'
import { HvSection } from "@hitachivantara/uikit-react-core";
import { HvDashboard } from "@hitachivantara/uikit-react-lab";
import { FaThermometerHalf, FaExclamationTriangle, FaClock, FaArrowUp } from 'react-icons/fa';

// Define your card data, including title and content as components
const cardData = [
  {
    key: "1",
    title: (
      <div className="flex items-center gap-2 mb-2">
        <FaExclamationTriangle className="text-gray-300 text-base" />
        <span className='text-sm font-semibold text-gray-200'>Active vs. Inactive Sensors</span>
      </div>
    ),
    content: (
      <>
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
        <hr className='border-gray-600 my-4' />
        <div className='flex justify-between items-center mt-4'>
          <span className='text-sm text-gray-300'>Uptime</span>
          <span className='text-blue-400 font-semibold text-base'>95.0%</span>
        </div>
      </>
    ),
    style: { backgroundColor: "#172554", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }
  },
  {
    key: "2",
    title: (
      <div className="flex items-center gap-2 mb-2">
        <FaThermometerHalf className="text-gray-300 text-base" />
        <span className='text-sm font-semibold text-gray-200'>Temperature Analytics</span>
      </div>
    ),
    content: (
      <>
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
        <div className="mt-4">
          <div className="w-full rounded bg-gray-700 overflow-hidden">
            <div className="h-2 rounded bg-gradient-to-r from-orange-400 to-blue-400" style={{ width: '60%' }} />
          </div>
        </div>
      </>
    ),
    style: { backgroundColor: "#172554", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }
  },
  {
    key: "3",
    title: (
      <div className="flex items-center gap-2 mb-2">
        <FaExclamationTriangle className="text-gray-300 text-base" />
        <span className='text-sm font-semibold text-gray-200'>High Temp Alerts</span>
      </div>
    ),
    content: (
      <>
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
      </>
    ),
    style: { backgroundColor: "#172554", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }
  },
  {
    key: "4",
    title: (
      <div className="flex items-center gap-2 mb-2">
        <FaExclamationTriangle className="text-gray-300 text-base" />
        <span className='text-sm font-semibold text-gray-200'>Unresolved Outages</span>
      </div>
    ),
    content: (
      <>
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
      </>
    ),
    style: { backgroundColor: "#172554", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }
  }
];

const layout = [
  { i: "1", x: 0, y: 0, w: 6, h: 1.4, isResizable: false },
  { i: "2", x: 6, y: 0, w: 6, h: 1.4, isResizable: false },
  { i: "3", x: 0, y: 1, w: 6, h: 1.4, isResizable: false },
  { i: "4", x: 6, y: 1, w: 6, h: 1.4, isResizable: false },
];

const DashboardCards = () => {
  return (
    <HvDashboard layout={layout}>
      {cardData.map(card => (
        <HvSection
          key={card.key}
          title={card.title}
          style={card.style}
        >
          {card.content}
        </HvSection>
      ))}
    </HvDashboard>
  );
};

export default DashboardCards;