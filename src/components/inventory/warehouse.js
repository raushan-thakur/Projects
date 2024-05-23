import React from 'react';
import CustomProgress from './CustomProgress';
const dummyInventoryData = [
  {
    facilityName: 'Faruknagar WH',
    facilityId: '412411',
    state: 'Haryana',
    warehouseInventory: {
      total: ['200', '20', '2'],
      utilization: ['2']
    },
    darkstoreInventory: {
      total: ['201', '20', '2']
    },
    inTransitInventory: '20'
  },
  {
    facilityName: 'Faruknagar WH',
    facilityId: '412411',
    state: 'Haryana',
    warehouseInventory: {
      total: ['200', '20', '2'],
      utilization: ['2']
    },
    darkstoreInventory: {
      total: ['201', '20', '2']
    },
    inTransitInventory: '20'
  },
  {
    facilityName: 'Faruknagar WH',
    facilityId: '412411',
    state: 'Haryana',
    warehouseInventory: {
      total: ['200', '20', '2'],
      utilization: ['2']
    },
    darkstoreInventory: {
      total: ['201', '20', '2']
    },
    inTransitInventory: '20'
  },
];

function warehouse() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Inventory Data</h1>
      
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name of Facility</th>
            <th className="px-4 py-2">State</th>
            <th className="px-4 py-2">Total Warehouse Inventory</th>
            <th className="px-4 py-2">Total Darkstore Inventory</th>
            <th className="px-4 py-2">Warehouse Utilisation</th>
          </tr>
        </thead>
        <tbody>
          {dummyInventoryData.map((facility, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{facility.facilityName}</td>
              <td className="border px-4 py-2">{facility.state}</td>
              <td className="p-5 m-6 border px-4 py-2">{facility.warehouseInventory.total.join(', ')}</td>
              <td className="  border px-4 py-2">{facility.darkstoreInventory.total.join(', ')}</td>
              <td className="border px-4 py-2">{<CustomProgress percent={100} />}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default warehouse;
