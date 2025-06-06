import React from 'react';
import SummaryDashboardNavbar from '../../Navbar/SummaryDashboardNavbar';
import { HvDashboard } from '@hitachivantara/uikit-react-lab';
import { HvSection } from '@hitachivantara/uikit-react-core';
import { FaExclamationTriangle, FaThermometerHalf, FaClock, FaArrowUp } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const cardHeadingColor = "text-gray-600";
const CardHeading = ({ icon, text }) => (
    <div className="flex items-center gap-2 mb-3">
      {icon}
      <span className={`text-base font-semibold ${cardHeadingColor}`}>{text}</span>
    </div>
);

const SummaryDashboard = () => {
    
    const dashboardColor = { bg: 'bg-gray-100', text: 'text-black' };
    const dashboardButtonColor = 'bg-white';
    const cardBgColor ="#FFFFFF"; 
    const cardInnerTextColor = "text-gray-500";
    const cardIconColor = "text-gray-600";
    const cardInnerTextLightColor = "text-gray-400";
    
    const layout = [
        { i: "1", x: 0, y: 0, w: 6, h: 2, isResizable: false },
        { i: "2", x: 6, y: 0, w: 6, h: 2, isResizable: false },
        { i: "3", x: 0, y: 1, w: 6, h: 1.7, isResizable: false },
        { i: "4", x: 6, y: 1, w: 6, h: 1.7, isResizable: false },
    ];
    
    // Chart data and options should be defined BEFORE cardData
const temperatureTrendData = {
  labels: [
    "3-15-4", "3-15-8", "3-15-12", "3-15-16", "3-15-20", "3-16-0", "3-16-4", "3-16-8", "3-16-12", "3-16-16", "3-16-20", "3-17-0", "3-17-4", "3-17-8", "3-17-12"
  ],
  datasets: [
    {
      label: 'Sensor 1',
      data: [42, 43, 44, 43, 42, 41, 42, 43, 44, 43, 42, 41, 42, 43, 44],
      borderColor: '#6366f1',
      backgroundColor: 'rgba(99,102,241,0.1)',
      tension: 0.3,
      pointRadius: 2,
      fill: false,
    },
    {
      label: 'Sensor 2',
      data: [37, 37.2, 37.4, 37.3, 37.5, 37.6, 37.4, 37.3, 37.2, 37.1, 37.2, 37.3, 37.4, 37.2, 37.4],
      borderColor: '#10b981',
      backgroundColor: 'rgba(16,185,129,0.1)',
      tension: 0.3,
      pointRadius: 2,
      fill: false,
    },
    {
      label: 'Sensor 3',
      data: [22, 23, 22.5, 23, 22.8, 23.1, 23, 22.9, 23, 22.8, 23, 22.9, 23, 22.8, 23],
      borderColor: '#f59e42',
      backgroundColor: 'rgba(245,158,66,0.1)',
      tension: 0.3,
      pointRadius: 2,
      fill: false,
    },
  ],
};

const temperatureTrendOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
      labels: {
        color: '#64748b',
        font: { size: 12, family: 'inherit' },
      },
    },
    tooltip: {
      enabled: true,
      callbacks: {
        title: (tooltipItems) => {
          const label = tooltipItems[0].label || '';
          const [month, day, hour] = label.split('-');
          return [`Month: ${month}`, `Day: ${day}`, `Hour: ${hour}`];
        },
        label: (context) => {
          return `${context.dataset.label}: ${context.parsed.y}`;
        },
      },
      backgroundColor: '#fff',
      titleColor: '#222',
      bodyColor: '#222',
      borderColor: '#e5e7eb',
      borderWidth: 1,
      padding: 10,
      displayColors: false,
    },
  },
  scales: {
    x: {
      grid: { color: 'rgba(0,0,0,0.05)' },
      ticks: { color: '#64748b', font: { size: 11 } },
    },
    y: {
      grid: { color: 'rgba(0,0,0,0.07)' },
      ticks: { color: '#64748b', font: { size: 11 } },
      beginAtZero: false,
      min: 0,
      max: 60,
    },
  },
  elements: {
    line: { borderWidth: 2,tension: 2},
    point: { borderWidth: 0 },
  },
  maintainAspectRatio: false,
};

// Data for Bushing Realtime Temperature (key 3)
const bushingTableData = [
  { label: "B1", low: 54, avg: 58, max: 62 },
  { label: "B2", low: 53, avg: 59, max: 53 },
  { label: "B3", low: 54, avg: 57, max: 61 },
];
// Use images from public folder
const bushingImageUrl = "/images/bushing-thermal.png";
const bushingTimestamp = "2022-02-10 14:58:59";

// Data for Transformer Indicators View (key 4)
const tapChanger = {
  image: "/images/tap-changer.png",
  position: "1L, 3R, 6R",
  timestamp: "2022-02-10 14:57:56",
};
const temperatureGauges = {
  image: "/images/temperature-gauges.png",
  primary: 50,
  secondary: 50,
  liquid: 48,
};

// Now define cardData below this!
const cardData = [
    {
        key: "1",
        title: (
            <CardHeading
            icon={<FaExclamationTriangle className={`${cardIconColor} text-lg`} />}
            text="Transformer Live View"
            />
        ),
        content: (
            <>
            <div>
              <hr
                className="border-t border-black/20 border-[0.5px] mb-2 w-[calc(100%+40px)] -mx-5"
                style={{ borderColor: "rgba(0,0,0,0.15)" }}
              />
                <div className="bg-white flex items-center justify-center">
                    <video width="95%" autoPlay loop muted playsinline>
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
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
        key: "2",
        title: (
            <CardHeading
            icon={<FaThermometerHalf className={`${cardIconColor} text-lg`} />}
            text="Transformer Temperature Trend"
            />
        ),
        content: (
            <>
              <hr
                className="border-t border-black/20 border-[0.5px] mb-5 w-[calc(100%+40px)] -mx-5"
                style={{ borderColor: "rgba(0,0,0,0.15)" }}
              />
              <div style={{ height: 220, marginBottom: 16 }}>
                <Line data={temperatureTrendData} options={temperatureTrendOptions} />
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
        text="Bushing Realtime Temperature"
      />
    ),
    content: (
        <>
        <hr
          className="border-t border-black/20 border-[0.5px] mb-1 w-[calc(100%+40px)] -mx-5"
          style={{ borderColor: "rgba(0,0,0,0.15)" }}
        />
        <div className="text-right text-sm text-gray-400 mt-1 mb-2">{bushingTimestamp}</div>
        <div className="flex flex-row gap-4 items-center">
          {/* Left: Thermal Image */}
          <div className="flex-shrink-0">
            <img
              src={bushingImageUrl}
              alt="Thermal Bushing"
              className="w-40 h-38 object-cover rounded shadow"
            />
          </div>
          {/* Right: Table */}
          <div className="flex-1">
            <table className="w-full h-38 text-center rounded overflow-hidden shadow border border-gray-200 bg-white">
              <thead>
                <tr className="bg-gray-100 text-gray-600 text-xs">
                  <th className="py-1 px-2 border-b border-gray-200">Temp&nbsp;°C</th>
                  <th className="py-1 px-2 border-b border-gray-200">Low</th>
                  <th className="py-1 px-2 border-b border-gray-200">Avg</th>
                  <th className="py-1 px-2 border-b border-gray-200">Max</th>
                </tr>
              </thead>
              <tbody>
                {bushingTableData.map((row, idx) => (
                  <tr key={row.label} className={idx % 2 === 1 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-1 px-2 border-b border-gray-100 text-gray-600">{row.label}</td>
                    <td className="py-1 px-2 border-b border-gray-100 text-green-500 font-semibold">{row.low}</td>
                    <td className="py-1 px-2 border-b border-gray-100 text-green-500 font-semibold">{row.avg}</td>
                    <td className="py-1 px-2 border-b border-gray-100 text-green-500 font-semibold">{row.max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
        key: "4",
        title: (
            <CardHeading
            icon={<FaExclamationTriangle className={`${cardIconColor} text-lg`} />}
            text="Transformer Indicators View"
            />
        ),
        content: (
            <>
            <hr
                className="border-t border-black/20 border-[0.5px] mb-1 w-[calc(100%+40px)] -mx-5"
                style={{ borderColor: "rgba(0,0,0,0.15)" }}
              />
            <div className="flex flex-row gap-4 items-center justify-center">
            {/* Tap Changer */}
                <div className="flex flex-col items-center rounded min-w-[120px]">
                    <span className="text-md mb-1">Tap Changer</span>
                    <img
                    src={tapChanger.image}
                    alt="Tap Changer"
                    className="w-24 h-25 object-cover rounded shadow mb-1"
                    />
                    <span className="text-sm mb-1 border-black border-1 mt-1 mb-2 p-1">{tapChanger.position}</span>
                    <span className="text-xs">{tapChanger.timestamp}</span>
                </div>
            {/* Temperature Gauges */}
            <div className="flex flex-row gap-4 items-center rounded">
                <div className='flex flex-col items-center rounded min-w-[120px]'>
                    <span className="text-md mb-1">Temperature</span>
                    <img
                    src={temperatureGauges.image}
                    alt="Temperature Gauges"
                    className="w-18 h-40 object-cover rounded shadow mb-1"
                    />
                </div>
                <div className="text-between text-sm font-medium">
                    <div className="mb-1">Primary Winding </div>
                    <div className="font-normal text-center">{temperatureGauges.primary}°C</div>
                    <br/>
                    <div className="mb-1">Secondary Winding</div>
                    <div className="font-normal text-center">{temperatureGauges.secondary}°C</div>
                    <br/>
                    <div>Liquid Temperature</div>
                    <div className="font-normal text-center">{temperatureGauges.liquid}°C</div>
                </div>
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
    }
];

return (
    <div className={`min-h-screen ${dashboardColor.bg} ${dashboardColor.text}`}>
            {/* Placeholder for future Navbar */}
            <SummaryDashboardNavbar />
            {/* Placeholder for future content */}
            <div>
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
            </div>
        </div>
    );
}

export default SummaryDashboard;