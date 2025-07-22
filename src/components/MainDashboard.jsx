import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import { useSidebar } from "../context/SidebarContext";
import MainNavbar from "./Navbar/MainNavbar";
import VerizonDashboard from "./dashboard/VerizonDashboard";
import ThermalSensorDashboard from "./dashboard/ThermalSensor/ThermalSensorDashboard";
import GaugeMonitorDashboard from "./dashboard/GaugeMonitor/GaugeMonitorDashboard";
import SummaryDashboard from "./dashboard/SummaryDashboard/SummaryDashboard";

const MainDashboard = () => {
  const { activeSection } = useSidebar("verizon");
  const sidebarSections = ["verizon","thermal","gauge","summary"];
  const sidebarIcons = [null, null]; // Use null for no icons
  const sidebarNames = ["Verizon Dashboard","Thermal Sensor Dashboard","Gauge Monitor Dashboard","Summary Dashboard"];

  return (
    <>
      <MainNavbar />
      <div className="min-h-screen pt-1 w-full flex flex-col bg-gray-100">
        {/* Sidebar and Main Content */}
        <div className="flex flex-1">
          {/* Sidebar with fixed width */}
          <Sidebar
            titleName="Dashboard"
            activeSectionList={sidebarSections}
            LogoComponents={sidebarIcons}
            sectionNames={sidebarNames}
            className="w-60" // Fixed width for Sidebar
          />
          {/* Main Content with remaining space */}
          <div className="flex-grow m-2">
            {activeSection === "verizon" && <VerizonDashboard/>}
            {activeSection === "thermal" && <ThermalSensorDashboard/>}
            {activeSection === "gauge" && <GaugeMonitorDashboard/>}
            {activeSection === "summary" && <SummaryDashboard/>}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDashboard;