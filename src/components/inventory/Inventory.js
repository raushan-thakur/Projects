import React, { useState } from "react";
import Warehouse from "./warehouse";
import DarkStore from "./DarkStore";
import Intransit from "./Intransit";
import CustomProgress from "./CustomProgress";

const InventoryApp = () => {
  const [activeSection, setActiveSection] = useState("warehouse");

  const renderInventorySection = (section) => {
    switch (section) {
      case "warehouse":
        return <Warehouse />;
      case "darkstore":
        return <DarkStore />;
      case "inTransit":
        return <Intransit />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-8 p-10">
      <div className="flex justify-between  m-2">
        <h1 className="text-3xl font-bol mb-4">Inventory</h1>
        <button className="bg-green-600 text-white px-4 py-2 mb-4 rounded-lg">
          + Create Shipment
        </button>
      </div>
      <div className="flex mb-4">
        <button
          className={`mr-4 ${activeSection === "warehouse" ? "font-bold" : ""}`}
          onClick={() => setActiveSection("warehouse")}
        >
          Warehouse inventory
        </button>
        <button
          className={`mr-4 ${activeSection === "darkstore" ? "font-bold" : ""}`}
          onClick={() => setActiveSection("darkstore")}
        >
          Darkstore inventory
        </button>
        <button
          className={`mr-4 ${activeSection === "inTransit" ? "font-bold" : ""}`}
          onClick={() => setActiveSection("inTransit")}
        >
          In-transit inventory
        </button>
      </div>
      {renderInventorySection(activeSection)}
      
    </div>
  );
};

export default InventoryApp;
