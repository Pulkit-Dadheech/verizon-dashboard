const XLSX = require('xlsx');
const fs = require('fs');

// Read the Excel file
const workbook = XLSX.readFile('public/Verizon - Simulated Data - v1.xlsx');

// Get the first sheet name
const sheetName = workbook.SheetNames[0];

// Convert the sheet to JSON
const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

// Write the JSON to a file
fs.writeFileSync('public/verizon-data.json', JSON.stringify(data, null, 2));

console.log('Excel data has been converted to JSON!');
