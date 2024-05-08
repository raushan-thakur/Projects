import React, { useState } from "react";

const dummyActivities = [
  {
    id: 1,
    type: "Request rejected",
    date: "2024-03-23",
    time: "10:30 am",
    message: "for Item with UPC 32675630.",
  },
  {
    id: 2,
    type: "Inventory received",
    date: "2024-03-23",
    time: "10:30 am",
    message: "Pis review listing for item with UPC 32675630.",
  },
  {
    id: 3,
    type: "Payout generated",
    date: "2024-03-24",
    time: "10:30 am",
    message: "listing for item with UPC 32675630.",
  },
  {
    id: 4,
    type: "PID created",
    date: "2024-03-25",
    time: "10:30 am",
    message: "Pis review listing for item with UPC 32675630.",
  },
  {
    id: 5,
    type: "Request accepted",
    date: "2024-03-26",
    time: "10:30 am",
    message: "Pis review listing for item with UPC 32675630.",
  },
  {
    id: 6,
    type: "Request rejected",
    date: "2024-03-27",
    time: "10:30 am",
    message: "Pis review listing for item with UPC 32675630.",
  },
  {
    id: 7,
    type: "Request accepted",
    date: "2024-03-28",
    time: "10:30 am",
    message: "Pis review listing for Item with UPC 32675630.",
  },
];

const Header = () => {
  const [filter, setFilter] = useState("All");
  const [notificationType, setNotificationType] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredActivities = dummyActivities.filter((activity) => {
    const isNotificationTypeMatch = notificationType
      ? activity.type === notificationType
      : true;
    const isFromDateMatch = fromDate
      ? new Date(activity.date) >= new Date(fromDate)
      : true;
    const isToDateMatch = toDate
      ? new Date(activity.date) <= new Date(toDate)
      : true;

    if (filter === "All") {
      return isNotificationTypeMatch && isFromDateMatch && isToDateMatch;
    } else if (filter === "Unread") {
      return (
        activity.type === "Request accepted" && isFromDateMatch && isToDateMatch
      );
    }
    return true;
  });

  return (
    <>
      <header className="  p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Activity</div>
        <div className="flex space-x-4">
          <select
            className="bg-gray-200  px-3 py-1 rounded"
            value={notificationType}
            onChange={(e) => setNotificationType(e.target.value)}
          >
            <option value="">Notification Type</option>
            <option value="Request rejected">Request rejected</option>
            <option value="Inventory received">Inventory received</option>
            <option value="Payout generated">Payout generated</option>
            <option value="PID created">PID created</option>
            <option value="Request accepted">Request accepted</option>
          </select>
          <input
            type="date"
            className="bg-gray-200  px-3 py-1 rounded"
            placeholder="From"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
          <input
            type="date"
            className="bg-gray-200  px-3 py-1 rounded"
            placeholder="To"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>
      </header>
      <div className="bg-gray-50 p-2 flex  items-center">
        <button
          className={` px-4 py-2 rounded  ${
            filter === "All" ? "text-black underline" : "text-gray-400"
          }`}
          onClick={() => handleFilterChange("All")}
        >
          All
        </button>
        <button
          className={`  px-4 py-2 rounded  ${
            filter === 'Unread' ? "text-black underline" : "text-gray-400"
          }`}
          onClick={() => handleFilterChange("Unread")}
        >
          Unread
        </button>
      </div>
      <div className="mt-4">
        {filteredActivities.map((activity) => (
          <div
            key={activity.id}
            className="p-4 border-b border-gray-300 flex justify-between"
          >
            <div className="">
              <p className="font-bold">{activity.type}</p>
              <p>Message: {activity.message}</p>
            </div>

            <div>
              <p className="italic">{activity.date}</p>
              <p>{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Header;
