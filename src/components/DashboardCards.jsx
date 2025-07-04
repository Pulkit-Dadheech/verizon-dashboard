import React from 'react'
import { HvSection } from "@hitachivantara/uikit-react-core";
import { HvDashboard } from "@hitachivantara/uikit-react-lab";
import { 
  FaThermometerHalf, 
  FaExclamationTriangle, 
  FaClock, 
  FaArrowUp, 
  FaCheckCircle, 
  FaExclamationCircle, 
  FaCamera, 
  FaWifi, 
  FaChartLine 
} from 'react-icons/fa';

// Centralized card style variables
const cardBgColor ="#FFFFFF"; 
const cardHeadingColor = "text-gray-600";
const cardInnerTextColor = "text-gray-500";
const cardIconColor = "text-gray-600";
const cardInnerTextLightColor = "text-gray-400";
const gaugeReadingElementsBgColor = "bg-gray-100";
const lastUpdateElementsBgColor = "bg-gray-100";

// Helper for card heading with separator
const CardHeading = ({ icon, text }) => (
    <div className="flex items-center gap-2 mb-3">
      {icon}
      <span className={`text-base font-semibold ${cardHeadingColor}`}>{text}</span>
    </div>
);

// Example data for stations
const stations = [
  { name: "Station A", value: 8, total: 12, color: "#f87171" }, //light red
  { name: "Station B", value: 5, total: 12, color: "#C2410C" },
  { name: "Station C", value: 12, total: 12 , color: "#991B1B"},
  { name: "Station D", value: 3, total: 12, color: "#FBBF24" },
  { name: "Station E", value: 7, total: 12, color: "#FB923C" },
];

// Define your card data, including title and content as components
const cardData = [
  {
    key: "1",
    title: (
      <CardHeading
        icon={<FaExclamationTriangle className={`${cardIconColor} text-lg`} />}
        text="Active vs. Inactive Sensors"
      />
    ),
    content: (
      <>
        <div>
          <hr
            className="border-t border-black/20 border-[0.5px] mb-5 w-[calc(100%+40px)] -mx-5"
            style={{ borderColor: "rgba(0,0,0,0.15)" }}
          />
          <div className='flex flex-row justify-between items-end mb-4 mt-2'>
            <div className='text-3xl font-bold text-green-400'>247</div>
            <div className={`text-sm ${cardInnerTextColor}`}>Active</div>
          </div>
          <div className='flex flex-row justify-between items-end mb-2 mt-4'>
            <div className='text-xl font-semibold text-red-400'>13</div>
            <div className={`text-sm ${cardInnerTextColor}`}>Inactive</div>
          </div>
        </div>
        <hr className='border-gray-600 my-4' />
        <div className='flex justify-between items-center mt-4'>
          <span className={`text-sm ${cardInnerTextLightColor}`}>Uptime</span>
          <span className='text-blue-400 font-semibold text-base'>95.0%</span>
        </div>
      </>
    ),
    style: {
      backgroundColor: cardBgColor,
      padding: "20px",
      borderRadius: "16px",
      border: "0.5px solid rgba(0,0,0,0.15)",
      boxShadow: "0 4px 16px 0 rgba(0,0,0,0.07)"
    }
  },
  {
    key: "2",
    title: (
      <CardHeading
        icon={<FaThermometerHalf className={`${cardIconColor} text-lg`} />}
        text="Temperature Analytics"
      />
    ),
    content: (
      <>
        <div>
          <hr
            className="border-t border-black/20 border-[0.5px] mb-5 w-[calc(100%+40px)] -mx-5"
            style={{ borderColor: "rgba(0,0,0,0.15)" }}
          />
          <div className='flex flex-row justify-between items-end mb-4 mt-2'>
            <div className={`text-sm ${cardInnerTextColor}`}>Max Temp</div>
            <div className='text-3xl font-bold text-orange-400'>78.5°C</div>
          </div>
          <div className='flex flex-row justify-between items-end mt-3 mb-2'>
            <div className={`text-sm ${cardInnerTextColor}`}>Avg Temp</div>
            <div className='text-xl font-bold text-blue-400'>45.2°C</div>
          </div>
        </div>
        <div className="mt-4">
          <div className="w-full rounded bg-gray-100 overflow-hidden">
            <div className="h-2 rounded bg-gradient-to-r from-orange-400 to-blue-400" style={{ width: '60%' }} />
          </div>
        </div>
      </>
    ),
    style: {
      backgroundColor: cardBgColor,
      padding: "20px",
      borderRadius: "16px",
      border: "0.5px solid rgba(0,0,0,0.15)",
      boxShadow: "0 4px 16px 0 rgba(0,0,0,0.07)"
    }
  },
  {
    key: "3",
    title: (
      <CardHeading
        icon={<FaExclamationTriangle className={`${cardIconColor} text-lg`} />}
        text="High Temp Alerts"
      />
    ),
    content: (
      <>
        <hr
            className="border-t border-black/20 border-[0.5px] mb-5 w-[calc(100%+40px)] -mx-5"
            style={{ borderColor: "rgba(0,0,0,0.15)" }}
          />
        <div className='flex justify-between items-end'>
          <div>
            <div className='text-3xl font-bold text-yellow-400'>12</div>
          </div>
          <div className={`text-sm ${cardInnerTextLightColor}`}>Triggered</div>
        </div>
        <div className='flex items-center mt-3'>
          <FaArrowUp className="text-red-400 mr-2" />
          <span className='text-red-400 text-sm font-semibold'>+3 from yesterday</span>
        </div>
        <hr className='border-t border-gray-600 my-4' />
        <div className={`text-sm ${cardInnerTextColor}`}>Safety threshold exceeded</div>
      </>
    ),
    style: {
      backgroundColor: cardBgColor,
      padding: "20px",
      borderRadius: "16px",
      border: "0.5px solid rgba(0,0,0,0.15)",
      boxShadow: "0 4px 16px 0 rgba(0,0,0,0.07)"
    }
  },
  {
    key: "4",
    title: (
      <CardHeading
        icon={<FaExclamationTriangle className={`${cardIconColor} text-lg`} />}
        text="Unresolved Outages"
      />
    ),
    content: (
      <>
        <hr
            className="border-t border-black/20 border-[0.5px] mb-5 w-[calc(100%+40px)] -mx-5"
            style={{ borderColor: "rgba(0,0,0,0.15)" }}
          />
        <div className='flex justify-between items-end'>
          <div>
            <div className='text-3xl font-bold text-red-400'>5</div>
          </div>
          <div className={`text-sm ${cardInnerTextLightColor}`}>Active</div>
        </div>
        <div className='flex items-center mt-3'>
          <span className="inline-flex items-center justify-center rounded-full border-1 border-gray-500  mr-2">
            <FaClock className='text-blue-400' />
          </span>
          <span className='text-sm text-blue-300'>Avg: 2.4h</span>
        </div>
        <hr className='border-t border-gray-600 my-4' />
        <div className={`text-sm ${cardInnerTextColor}`}>Pending resolution</div>
      </>
    ),
    style: {
      backgroundColor: cardBgColor,
      padding: "20px",
      borderRadius: "16px",
      border: "0.5px solid rgba(0,0,0,0.15)",
      boxShadow: "0 4px 16px 0 rgba(0,0,0,0.07)"
    }
  },
  {
    key: "5",
    title: (
      <CardHeading
        icon={<FaThermometerHalf className={`${cardIconColor} text-lg`} />}
        text="Location-wise Fault Distribution"
      />
    ),
    content: (
      <>
        <hr
            className="border-t border-black/20 border-[0.5px] mb-5 w-[calc(100%+40px)] -mx-5"
            style={{ borderColor: "rgba(0,0,0,0.15)" }}
          />
      <div className='flex flex-col gap-4'>
        {stations.map((station) => (
          <div className='flex justify-between items-center' key={station.name}>
            <span className={`text-sm ${cardInnerTextColor}`}>{station.name}</span>
            <span className="w-[90%] mx-2 rounded bg-gray-100 overflow-hidden">
              <div
                className="h-2 rounded"
                style={{ width: `${Math.round((station.value / station.total) * 100)}%`, backgroundColor: station.color }}
              />
            </span>
            <span className='text-lg font-semibold text-blue-400'>{station.value}</span>
          </div>
        ))}
      </div>
      </>
    ),
    style: {
      backgroundColor: cardBgColor,
      padding: "20px",
      borderRadius: "16px",
      border: "0.5px solid rgba(0,0,0,0.15)",
      boxShadow: "0 4px 16px 0 rgba(0,0,0,0.07)"
    }
  },
  {
    key: "6",
    title: (
      <CardHeading
        icon={<FaCamera className={`${cardIconColor} text-lg`} />}
        text="Gauge Reading Accuracy Check"
      />
    ),
    content: (
      <>
        <hr
            className="border-t border-black/20 border-[0.5px] mb-5 w-[calc(100%+40px)] -mx-5"
            style={{ borderColor: "rgba(0,0,0,0.15)" }}
        />
        <div className="flex gap-6 mb-4">
          <div className={`flex-1 flex flex-col items-center justify-center ${gaugeReadingElementsBgColor} p-6 rounded-lg shadow-md`}>
            <span className="inline-flex items-center justify-center rounded-full border-1 border-gray-500  mb-2">
              <FaCheckCircle className="text-green-400 text-2xl" />
            </span>
            <div className="text-green-400 text-3xl font-bold">98.51%</div>
            <div className={`text-sm ${cardInnerTextColor}`}>Accuracy Rate</div>
          </div>
          <div className={`flex-1 flex flex-col items-center justify-center ${gaugeReadingElementsBgColor} p-6 rounded-lg shadow-md`}>
            <span className="inline-flex items-center justify-center rounded-full border-1 border-gray-500 mb-2">
              <FaExclamationCircle className="text-yellow-400 text-2xl" />
            </span>
            <div className="text-yellow-400 text-3xl font-bold">23</div>
            <div className={`text-sm ${cardInnerTextColor}`}>Anomalies</div>
          </div>
        </div>
        <div className={`text-sm ${cardInnerTextColor}`}>
          Total readings processed: <span className="text-white font-semibold">1,547</span>
        </div>
      </>
    ),
    style: {
      backgroundColor: cardBgColor,
      padding: "20px",
      borderRadius: "16px",
      border: "0.5px solid rgba(0,0,0,0.15)",
      boxShadow: "0 4px 16px 0 rgba(0,0,0,0.07)"
    }
  },
  {
    key: "7",
    title: (
      <CardHeading
        icon={<FaClock className={`${cardIconColor} text-lg`} />}
        text="Last Update Age"
      />
    ),
    content: (
      <>
        <hr
            className="border-t border-black/20 border-[0.5px] mb-5 w-[calc(100%+40px)] -mx-5"
            style={{ borderColor: "rgba(0,0,0,0.15)" }}
        />
      <div className="flex flex-col gap-2">
        {/* Row 1 */}
        <div className={`flex items-center justify-between ${lastUpdateElementsBgColor} rounded p-3`}>  
          <div className="flex items-center gap-2">
            <FaWifi className="text-green-400" />
            <span className={`text-sm ${cardHeadingColor}`}>TH-001</span>
          </div>
          <span className="text-xs text-green-400 font-semibold">2 min ago</span>
        </div>
        {/* Row 2 */}
        <div className={`flex items-center justify-between ${lastUpdateElementsBgColor} rounded p-3`}>
          <div className="flex items-center gap-2">
            <FaWifi className="text-green-400" />
            <span className={`text-sm ${cardHeadingColor}`}>TH-002</span>
          </div>
          <span className="text-xs text-green-400 font-semibold">5 min ago</span>
        </div>
        {/* Row 3 */}
        <div className={`flex items-center justify-between ${lastUpdateElementsBgColor} rounded p-3`}>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center rounded-full border-1 border-gray-500">
              <FaExclamationCircle className="text-yellow-400" />
            </span>
            <span className={`text-sm ${cardHeadingColor}`}>GA-003</span>
          </div>
          <span className="text-xs text-yellow-400 font-semibold">15 min ago</span>
        </div>
        {/* Row 4 */}
        <div className={`flex items-center justify-between ${lastUpdateElementsBgColor} rounded p-3`}>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center rounded-full border-1 border-gray-500">
              <FaExclamationCircle className="text-red-400" />
            </span>
            <span className={`text-sm ${cardHeadingColor}`}>TH-004</span>
          </div>
          <span className="text-xs text-red-400 font-semibold">45 min ago</span>
        </div>
        {/* Row 5 */}
        <div className={`flex items-center justify-between ${lastUpdateElementsBgColor} rounded p-3`}>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center rounded-full border-1 border-gray-500">
              <FaExclamationCircle className="text-red-400" />
            </span>
            <span className={`text-sm ${cardHeadingColor}`}>GA-005</span>
          </div>
          <span className="text-xs text-red-400 font-semibold">1 hr ago</span>
        </div>
      </div>
      </>
    ),
    style: {
      backgroundColor: cardBgColor,
      padding: "20px",
      borderRadius: "16px",
      border: "0.5px solid rgba(0,0,0,0.15)",
      boxShadow: "0 4px 16px 0 rgba(0,0,0,0.07)"
    }
  },
  {
    key: "8",
    title: (
      <CardHeading
        icon={<FaChartLine className={`${cardIconColor} text-lg`} />}
        text="Log Volume (24h)"
      />
    ),
    content: (
      <div>
        <hr
            className="border-t border-black/20 border-[0.5px] mb-5 w-[calc(100%+40px)] -mx-5"
            style={{ borderColor: "rgba(0,0,0,0.15)" }}
        />
        <div className="flex items-center justify-between mb-2">
          <span className="text-4xl font-bold text-blue-400 my-2">460</span>
          <div className="flex items-center gap-4 border-1 p-2 border-gray-300 rounded">
            <FaArrowUp className="text-green-400 text-base" />
            <span className="text-green-400 text-sm font-semibold">
              <span className="text-lg">+12%</span> vs yesterday
            </span>

          </div>
        </div>
        {/* Bar chart */}
        <div className="flex flex-col gap-1 mt-2">
          <div className="flex items-center gap-2 mx-1">
            <span className={`text-xs ${cardInnerTextColor} w-10`}>00:00</span>
            <div className="bg-blue-400 h-2 rounded" style={{ width: '40%' }} />
            <span className={`text-xs ${cardInnerTextColor} ml-2`}>45</span>
          </div>
          <div className="flex items-center gap-2 mx-1">
            <span className={`text-xs ${cardInnerTextColor} w-10`}>04:00</span>
            <div className="bg-blue-400 h-2 rounded" style={{ width: '30%' }} />
            <span className={`text-xs ${cardInnerTextColor} ml-2`}>32</span>
          </div>
          <div className="flex items-center gap-2 mx-1">
            <span className={`text-xs ${cardInnerTextColor} w-10`}>08:00</span>
            <div className="bg-blue-400 h-2 rounded" style={{ width: '52%' }} />
            <span className={`text-xs ${cardInnerTextColor} ml-2`}>78</span>
          </div>
          <div className="flex items-center gap-2 mx-1">
            <span className={`text-xs ${cardInnerTextColor} w-10`}>12:00</span>
            <div className="bg-blue-400 h-2 rounded" style={{ width: '63%' }} />
            <span className={`text-xs ${cardInnerTextColor} ml-2`}>95</span>
          </div>
          <div className="flex items-center gap-2 mx-1">
            <span className={`text-xs ${cardInnerTextColor} w-10`}>16:00</span>
            <div className="bg-blue-400 h-2 rounded" style={{ width: '82%' }} />
            <span className={`text-xs ${cardInnerTextColor} ml-2`}>123</span>
          </div>
        </div>
      </div>
    ),
    style: {
      backgroundColor: cardBgColor,
      padding: "20px",
      borderRadius: "16px",
      border: "0.5px solid rgba(0,0,0,0.15)",
      boxShadow: "0 4px 16px 0 rgba(0,0,0,0.07)"
    }
  }
];

const layout = [
  { i: "1", x: 0, y: 0, w: 6, h: 1.5, isResizable: false },
  { i: "2", x: 6, y: 0, w: 6, h: 1.5, isResizable: false },
  { i: "3", x: 0, y: 1, w: 6, h: 1.5, isResizable: false },
  { i: "4", x: 6, y: 1, w: 6, h: 1.5, isResizable: false },
  { i: "5", x: 0, y: 2, w: 12, h: 1.9, isResizable: false },
  { i: "6", x: 0, y: 3, w: 12, h: 1.7, isResizable: false },
  { i: "7", x: 0, y: 4, w: 12, h: 2.3, isResizable: false },
  { i: "8", x: 0, y: 5, w: 12, h: 1.7, isResizable: false }
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