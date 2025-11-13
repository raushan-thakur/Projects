import React, { useState } from "react";

export default function Step1PersonalDetails({ formData, onChange, nextStep }) {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!formData.name || !formData.email) {
      setError("Please fill out all required fields.");
      return;
    }
    setError("");
    nextStep();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Personal Details</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) => onChange("name", e.target.value)}
        className="border p-2 w-full mb-3 rounded"
      />

      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => onChange("email", e.target.value)}
        className="border p-2 w-full mb-3 rounded"
      />

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <button
        onClick={handleNext}
        className="bg-blue-500 text-white px-4 py-2 rounded "
      >
        Next
      </button>
    </div>
  );
}
