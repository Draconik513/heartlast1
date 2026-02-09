// src/components/MusicPlayer.jsx
import { useState } from "react";

// Data lagu dengan Spotify Embed (iframe)
const songs = [
  {
    id: 1,
    title: "Ini Abadi",
    artist: "Perunggu",
    embedUrl:
      "https://open.spotify.com/embed/track/6cgBRhTzwk0OBhRX2E5F3V?utm_source=generator&theme=0",
  },
  {
    id: 2,
    title: "Kota Ini Tak Sama Tanpamu",
    artist: "Nadhif Basalamah",
    embedUrl:
      "https://open.spotify.com/embed/track/13CwOTXUgBugeBByE9oIWb?utm_source=generator&theme=0",
  },
  {
    id: 3,
    title: "Mesra Mesraanya Kecil Kecilan Saja",
    artist: "Sal Sapriadi",
    embedUrl:
      "https://open.spotify.com/embed/track/3TW8XLF8PyA3kFsV1l5713?utm_source=generator&theme=0",
  },
];

export default function MusicPlayer() {
  const [currentSong, setCurrentSong] = useState(0);

  const handleNext = () => {
    setCurrentSong((prev) => (prev + 1) % songs.length);
  };

  const handlePrev = () => {
    setCurrentSong((prev) => (prev - 1 + songs.length) % songs.length);
  };

  return (
    <div className="bg-gradient-to-br from-pink-900 via-pink-800 to-pink-700 rounded-2xl shadow-2xl border border-pink-400/30 p-4">
      <h2 className="text-lg font-bold text-pink-100 mb-3 text-center">
        Our Special Songs
      </h2>

      {/* Spotify Iframe Player */}
      <div className="flex flex-col items-center mb-4">
        <iframe
          src={songs[currentSong].embedUrl}
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-xl shadow-md border border-pink-400"
        ></iframe>

        <h3 className="text-sm font-semibold text-pink-100 mt-3">
          {songs[currentSong].title}
        </h3>
        <p className="text-xs text-pink-300">{songs[currentSong].artist}</p>
      </div>

      {/* Tombol kontrol */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          className="w-8 h-8 bg-pink-500 hover:bg-pink-400 rounded-full flex items-center justify-center text-white text-sm shadow-md transition-all"
        >
          ◀
        </button>

        <button
          onClick={handleNext}
          className="w-8 h-8 bg-pink-500 hover:bg-pink-400 rounded-full flex items-center justify-center text-white text-sm shadow-md transition-all"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
