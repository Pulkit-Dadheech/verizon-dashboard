const XLSX = require('xlsx');
const fs = require('fs');

// Read the Excel file
const workbook = XLSX.readFile('public/Verizon - Simulated Data - v1.xlsx');

// Export "Thermal" sheet
const thermalSheet = workbook.Sheets['Thermal'];
const thermalData = XLSX.utils.sheet_to_json(thermalSheet);
fs.writeFileSync('public/thermal-data.json', JSON.stringify(thermalData, null, 2));

// Export "Gauge" sheet
const gaugeSheet = workbook.Sheets['Gauge'];
const gaugeData = XLSX.utils.sheet_to_json(gaugeSheet);
fs.writeFileSync('public/gauge-data.json', JSON.stringify(gaugeData, null, 2));

console.log('Thermal and Gauge sheets exported to JSON!');
