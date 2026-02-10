import { useState } from "react";

import january1 from "../assets/images/memories/245cdc36-0aaa-40ed-8fd9-a482e76ec725 - Adhim Dzaka Danandra.jpeg";
import january2 from "../assets/images/memories/a3cd1f65-c97c-457e-a3e7-730d3dbe64ce - Adhim Dzaka Danandra.jpeg";
import january3 from "../assets/images/memories/IMG_4204 - Adhim Dzaka Danandra.png";
import january4 from "../assets/images/memories/IMG_4408 - Adhim Dzaka Danandra (1).jpeg";
import january5 from "../assets/images/memories/IMG_4417 - Adhim Dzaka Danandra.jpeg";

const monthPhotos = {
  January: [january1, january2, january3, january4, january5]
};


export default function Gallery() {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const monthsWithPhotos = Object.keys(monthPhotos)
    .filter((month) => monthPhotos[month].length > 0)
    .map((month) => ({
      name: month,
      photos: monthPhotos[month].length
    }));

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-pink-200 mb-6 text-center">
        Our Memories Through the Months
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {monthsWithPhotos.map((month) => (
          <div
            key={month.name}
            className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all duration-200"
            onClick={() => setSelectedMonth(month.name)}
          >
            <div className="aspect-square bg-gradient-to-br from-pink-700 to-purple-700 flex flex-col items-center justify-center p-2">
              <span className="text-lg font-semibold text-pink-100 text-center">
                {month.name}
              </span>
              <span className="mt-1 bg-pink-800 text-pink-200 text-xs px-2 py-1 rounded-full">
                {month.photos} {month.photos === 1 ? "photo" : "photos"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedMonth && (
  <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col">
    {/* Header */}
    <div className="flex justify-between items-center p-4 border-b border-pink-800 bg-black bg-opacity-80">
      <h2 className="text-xl md:text-2xl font-bold text-pink-200">
        {selectedMonth} Memories
      </h2>
      <button
        className="text-pink-300 hover:text-white text-2xl"
        onClick={() => setSelectedMonth(null)}
      >
        ✕
      </button>
    </div>

    {/* Photos Grid - Improved spacing */}
    <div className="flex-1 overflow-y-auto p-2 sm:p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
        {monthPhotos[selectedMonth].map((photo, index) => (
          <div
            key={index}
            className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedPhoto(index)}
          >
            <img
              src={photo}
              alt={`Memory ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
)}

      {selectedPhoto !== null && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white text-3xl z-50"
            onClick={() => setSelectedPhoto(null)}
          >
            ✕
          </button>

          <img
            src={monthPhotos[selectedMonth][selectedPhoto]}
            alt={`Memory from ${selectedMonth}`}
            className="w-full h-full object-contain"
          />

          <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-60 px-4 py-2 rounded text-sm z-50">
            {selectedMonth} - Photo {selectedPhoto + 1}
          </div>
        </div>
      )}
    </div>
  );
}