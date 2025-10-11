import React, { useState, useEffect } from "react";





const DataTable = ({ apiUrl, columns }) => {
    const datas = [
  {
    "id": 1,
    "name": "Alice Johnson",
    "position": "Software Engineer",
    "salary": 85000,
    "startDate": "2021-06-15"
  },
  {
    "id": 2,
    "name": "Bob Smith",
    "position": "Product Manager",
    "salary": 105000,
    "startDate": "2020-04-01"
  },
  {
    "id": 3,
    "name": "Catherine Lee",
    "position": "UX Designer",
    "salary": 78000,
    "startDate": "2022-01-20"
  },
  {
    "id": 4,
    "name": "David Martinez",
    "position": "DevOps Engineer",
    "salary": 92000,
    "startDate": "2019-11-05"
  },
  {
    "id": 5,
    "name": "Emily Davis",
    "position": "QA Engineer",
    "salary": 70000,
    "startDate": "2021-09-10"
  },
  {
    "id": 6,
    "name": "Frank Wilson",
    "position": "Data Scientist",
    "salary": 110000,
    "startDate": "2018-07-23"
  },
  {
    "id": 7,
    "name": "Grace Kim",
    "position": "Business Analyst",
    "salary": 80000,
    "startDate": "2022-05-30"
  },
  {
    "id": 8,
    "name": "Henry Brown",
    "position": "System Administrator",
    "salary": 75000,
    "startDate": "2020-12-17"
  },
  {
    "id": 9,
    "name": "Isabella Clark",
    "position": "Frontend Developer",
    "salary": 88000,
    "startDate": "2021-08-25"
  },
  {
    "id": 10,
    "name": "James Wilson",
    "position": "Backend Developer",
    "salary": 95000,
    "startDate": "2019-03-11"
  }
]
  const [data, setData] = useState(datas);
  const [filtered, setFiltered] = useState(datas);
  const [loading, setLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({ key: "name", direction: "asc" });
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(datas);
        setFiltered(datas);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, [apiUrl]);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sorted = [...filtered].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setFiltered(sorted);
  };

  const handleFilter = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const filteredData = data.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(value)
      )
    );
    setFiltered(filteredData);
  };

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="🔍 Filter..."
        value={search}
        onChange={handleFilter}
        className="border p-2 mb-4 w-full rounded"
      />
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={() => handleSort(col.key)}
                className="cursor-pointer p-2 text-left"
              >
                {col.label}
                {sortConfig.key === col.key &&
                  (sortConfig.direction === "asc" ? " ↑" : " ↓")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filtered.map((item) => (
            <tr key={item.id} className="border-t hover:bg-gray-100">
              {columns.map((col) => (
                <td key={col.key} className="p-2">
                  {item[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {filtered.length === 0 && (
        <p className="text-center mt-2 text-gray-500">No results found</p>
      )}
    </div>
  );
};

export default DataTable;
