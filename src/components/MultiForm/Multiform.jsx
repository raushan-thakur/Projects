import React, { useState } from "react";
import Step1PersonalDetails from "./Step1PersonalDetails";
import Step2AddressDetails from "./Step2AddressDetails";
import Step3Review from "./Step3Review";

export default function Multiform() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    alert("Form submitted successfully!");
    console.log(formData);
  };

  const steps = [
    <Step1PersonalDetails
      key={1}
      formData={formData}
      onChange={handleChange}
      nextStep={nextStep}
    />,
    <Step2AddressDetails
      key={2}
      formData={formData}
      onChange={handleChange}
      nextStep={nextStep}
      prevStep={prevStep}
    />,
    <Step3Review
      key={3}
      formData={formData}
      prevStep={prevStep}
      onSubmit={handleSubmit}
    />,
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="p-6 bg-white rounded-xl shadow-lg w-full max-w-md">
        <div className="flex justify-between mb-4">
          <span className="text-gray-600">
            Step {step} of {steps.length}
          </span>
          <progress value={step} max={steps.length} className="w-1/2"></progress>
        </div>

        {steps[step - 1]}
      </div>
    </div>
  );
}
