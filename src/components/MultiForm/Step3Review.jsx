import React from "react";

export default function Step3Review({ formData, prevStep, onSubmit }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Review & Submit</h2>

      <ul className="mb-4 text-gray-700">
        {Object.entries(formData).map(([key, value]) => (
          <li key={key} className="mb-2">
            <strong>{key.toUpperCase()}:</strong> {value}
          </li>
        ))}
      </ul>

      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Back
        </button>
        <button
          onClick={onSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
