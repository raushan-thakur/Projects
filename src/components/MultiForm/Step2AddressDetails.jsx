import React, { useState } from "react";

export default function Step2AddressDetails({ formData, onChange, nextStep, prevStep }) {
  const [error, setError] = useState("");
  const states = ["Bihar", "Delhi", "Karnataka", "Maharashtra"];

  const handleNext = () => {
    if (!formData.address || !formData.city || !formData.state) {
      setError("All fields are required.");
      return;
    }
    setError("");
    nextStep();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Address Details</h2>

      <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => onChange("address", e.target.value)}
        className="border p-2 w-full mb-3 rounded"
      />

      <input
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) => onChange("city", e.target.value)}
        className="border p-2 w-full mb-3 rounded"
      />

      <select
        value={formData.state}
        onChange={(e) => onChange("state", e.target.value)}
        className="border p-2 w-full mb-3 rounded"
      >
        <option value="">Select State</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
