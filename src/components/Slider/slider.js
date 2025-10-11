import React, { useState } from "react";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

export default function Stepper() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Stepper */}
      <div className="flex flex-col sm:flex-row items-center mb-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center sm:flex-row flex-col">
            <div
              className={`rounded-full h-10 w-10 flex items-center justify-center 
                ${currentStep >= index + 1 ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-600"}
              `}
            >
              {index + 1}
            </div>
            {index !== steps.length - 1 && (
              <div
                className={`${
                  currentStep > index + 1 ? "bg-blue-600" : "bg-gray-300"
                } sm:h-1 sm:w-16 h-16 w-1`}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="mb-6 text-lg font-medium">
        {steps[currentStep - 1]}
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={handleBack}
          disabled={currentStep === 1}
          className="px-6 py-2 rounded-lg bg-gray-500 text-white font-semibold hover:bg-gray-600 disabled:bg-gray-300"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === steps.length}
          className="px-6 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 disabled:bg-gray-400"
        >
          {currentStep === steps.length ? "Finished" : "Next"}
        </button>
      </div>
    </div>
  );
}
