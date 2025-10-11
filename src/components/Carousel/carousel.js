import React, { useState } from "react";

const images = [
  "https://picsum.photos/id/1011/600/400",
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1025/600/400",
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1019/600/400",
  "https://picsum.photos/id/1020/600/400",
];

export default function CustomSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">

        <div className="flex justify-center items-center space-4 pt-8">
            {images.map((src, index) => {
            const isActive = index === activeIndex;
            const isPrev =
                index === (activeIndex === 0 ? images.length - 1 : activeIndex - 1);
            const isNext =
                index === (activeIndex === images.length - 1 ? 0 : activeIndex + 1);

            let className =
                "transition-all duration-500 transform opacity-50 scale-75";
            if (isActive) {
                className = "scale-100 opacity-100 z-20";
            } else if (isPrev) {
                className = "-translate-x-28 scale-90 opacity-70 z-10";
            } else if (isNext) {
                className = "translate-x-28 scale-90 opacity-70 z-10";
            }

            return (
                <img
                key={index}
                src={src}
                alt={`slide-${index}`}
                className={`absolute rounded-xl shadow-lg ${className}`}
                style={{ width: "600px", height: "400px" }}
                />
            );
            })}
        </div>
        <div className=" mt-[220px] w-[25%] flex justify-center  items-center">
            {/* Controls */}
            <button
                onClick={prevSlide}
                className="  bg-white p-3 h-10 w-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-200"
            >
                ←
            </button>

              {/* Pagination */}
            <div className="flex justify-center space-x-2 mx-2">
                {images.map((_, index) => (
                <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full cursor-pointer ${
                    index === activeIndex ? "bg-black" : "bg-gray-400"
                    }`}
                ></div>
                ))}
            </div>

            <button
                onClick={nextSlide}
                className="  bg-white p-3 h-10 w-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-200"
            >
                →
            </button>

          
        </div>
    </div>
  );
}
