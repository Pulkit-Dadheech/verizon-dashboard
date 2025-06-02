import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import { useSidebar } from "../context/SidebarContext";
import MainNavbar from "./Navbar/MainNavbar";
import VerizonDashboard from "./VerizonDashboard";

export const MainDashboard = () => {
  const { activeSection, setActiveSection } = useSidebar("verizon");
  const sidebarSections = ["verizon"];
  const sidebarIcons = [null, null]; // Use null for no icons
  const sidebarNames = ["Verizon Dashboard"];

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
          </div>
        </div>
      </div>
    </>
  );
};