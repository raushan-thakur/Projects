import React from "react";
import DataTable from "./DataTable";

const EmployeePage = () => {
  const apiUrl = "https://mocki.io/v1/1c2b6b2b-1e9a-4ed9-8df2-71e64fefac22"; // Sample Employee API
  const columns = [
    { key: "name", label: "Name" },
    { key: "position", label: "Position" },
    { key: "salary", label: "Salary ($)" },
    { key: "startDate", label: "Start Date" },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Employee Directory</h1>
      <DataTable apiUrl={apiUrl} columns={columns} />
    </div>
  );
};

export default EmployeePage;
