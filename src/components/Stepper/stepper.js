import React, { useEffect, useState } from "react";

// Step list (static - comes from frontend)
const steps = ["Cart", "Address", "Payment", "Order Placed"];

// Fake API call (simulating backend)
function fetchOrderStatus() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ orderId: "12345", status: "PAYMENT_PENDING" });
    }, 1000); // simulate API delay
  });
}

// Mapping backend statuses to step number
const statusToStep = {
  CART: 1,
  ADDRESS_SAVED: 2,
  PAYMENT_PENDING: 3,
  ORDER_PLACED: 4,
};

export default function Stepper() {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(true);

  // Fetch order status from "backend"
  useEffect(() => {
    fetchOrderStatus().then((data) => {
      const step = statusToStep[data.status] || 1;
      setCurrentStep(step);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="text-center text-lg">Loading order status...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Stepper */}
      <div className="flex flex-col sm:flex-row items-center mb-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center sm:flex-row flex-col">
            <div
              className={`rounded-full h-10 w-10 flex items-center justify-center font-semibold
                ${
                  currentStep >= index + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300 text-gray-600"
                }
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
      <div className="mb-6 text-lg font-medium">{steps[currentStep - 1]}</div>
    </div>
  );
}
