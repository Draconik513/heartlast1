import { useState } from "react";
import PasswordLock from "./components/PasswordLock";
import Countdown from "./components/Countdown";
import BirthdayMessage from "./components/BirthdayMessage";
import MainMenu from "./components/MainMenu";
import MusicPlayer from "./components/MusicPlayer";
import "./index.css";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [showBirthday, setShowBirthday] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [showMusicPlayer, setShowMusicPlayer] = useState(false);

  const correctPassword = "BaCiL"; // Change this to your secret password

  const handleUnlock = () => {
    setShowCountdown(true);
    setTimeout(() => {
      setShowCountdown(false);
      setShowBirthday(true);
    }, 3800); // Matches countdown duration
  };

  if (!unlocked) {
    return (
      
      <div className="min-h-screen bg-gradient-to-b from-purple-900 to-pink-900 flex flex-col items-center justify-center">
        {showCountdown ? (
          <Countdown />
        ) : showBirthday ? (
          <BirthdayMessage
            onComplete={() => {
              setShowBirthday(false);
              setUnlocked(true);
            }}
          />
        ) : (
          <PasswordLock
            onUnlock={handleUnlock}
            correctPassword={correctPassword}
          />
        )}
      </div>
    );
  }

  return (
    <>
      <MainMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {/* Floating Music Player Toggle Button */}
      <button
        onClick={() => setShowMusicPlayer(!showMusicPlayer)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-pink-600 hover:bg-pink-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg z-50 transition-all"
      >
        🎵
      </button>

      {/* Floating Music Player */}
      {showMusicPlayer && (
        <div className="fixed bottom-24 right-6 z-50 w-80">
          <div className="relative">
            <button
              onClick={() => setShowMusicPlayer(false)}
              className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 hover:bg-red-600 rounded-full text-white flex items-center justify-center z-10"
            >
              ✕
            </button>
            <MusicPlayer />
          </div>
        </div>
      )}
    </>
  );
}
