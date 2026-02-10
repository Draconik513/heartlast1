import { useState } from 'react';
import januaryImg from '../assets/images/calendar/january.jpg';

export default function LoveCalendar() {
  const [activeIndex, setActiveIndex] = useState(null);

  const favoritePhotos = [
    { month: "First Fotbar😁", image: januaryImg, description: "" }
  ];

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Toggle off
    } else {
      setActiveIndex(index); // Set as active
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl font-bold text-pink-200 mb-8 text-center">Our Love Calendar</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoritePhotos.map((photo, index) => (
          <div 
            key={index}
            className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-pink-500/30 transition-all duration-300 cursor-pointer`}
            onClick={() => handleToggle(index)}
          >
            <div className="aspect-[4/3] relative">
              <img 
                src={photo.image} 
                alt={photo.month} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />

              {/* Gradient and description */}
              <div className={`
                absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent 
                flex items-end p-4
                transition-opacity duration-300
                ${activeIndex === index ? 'opacity-100' : 'opacity-0'} 
                group-hover:opacity-100
              `}>
                <p className={`text-white transition-transform duration-300 ${activeIndex === index ? 'translate-y-0' : 'translate-y-4'} group-hover:translate-y-0`}>
                  {photo.description}
                </p>
              </div>

              {/* Month label */}
              <div className="absolute top-0 left-0 bg-pink-700 text-pink-100 px-3 py-1 rounded-br-lg text-sm">
                {photo.month}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
