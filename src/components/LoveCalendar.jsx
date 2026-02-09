import { useState } from 'react';
import specialImg from '../assets/images/calendar/january.jpg';

export default function LoveCalendar() {
  const [isEnlarged, setIsEnlarged] = useState(false);

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl font-bold text-pink-200 mb-8 text-center">Special Foto</h1>

      <div className="flex justify-center">
        <div 
          className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-pink-500/30 transition-all duration-300 cursor-pointer max-w-md w-full"
          onClick={() => setIsEnlarged(true)}
        >
          <div className="aspect-[3/4] relative">
            <img 
              src={specialImg} 
              alt="Special Foto" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-0 left-0 bg-pink-700 text-pink-100 px-3 py-1 rounded-br-lg text-sm">
              First Fotbar😁
            </div>
          </div>
        </div>
      </div>

      {isEnlarged && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsEnlarged(false)}
        >
          <img 
            src={specialImg} 
            alt="Special Foto" 
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
