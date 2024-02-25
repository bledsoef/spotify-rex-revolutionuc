import React, { useState, useRef } from 'react';
import empireAnts from "./asset/empireAnts.wav";

function ListeningBar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(empireAnts));

  const handlePlayPauseClick = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play(); 
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-0 flex justify-between w-full p-8 bg-gray-900">
      <div className="flex flex-row w-full">
        <img className="w-32" src="https://upload.wikimedia.org/wikipedia/en/d/d1/Plasticbeach452.jpg" alt="album cover" />
        <div className="items-center h-full flex flex-col">
          <div className="p-5">
            <p className="text-3xl">Empire Ants</p>
            <p className="text-2xl text-gray-400">Gorillaz</p>
          </div>
        </div>
        <div className="items-center h-full flex flex-col mx-auto">
            <div className="flex flex-row space-x-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 fill-white stroke-white" viewBox="0 0 92 92" id="shuffle"><path d="M68.2 30C64 30 53.5 40.4 45.8 47.9 34.2 59.1 23.2 70 14.4 70H9c-2.2 0-4-1.8-4-4s1.8-4 4-4h5.4c5.6 0 16.8-11.2 25.8-19.9 11-10.6 20.5-20.1 28-20.1h5.2l-5.5-5.3c-1.6-1.6-1.6-3.9 0-5.5s4.1-1.6 5.7 0l12.3 12.3c.8.8 1.2 1.8 1.2 2.8 0 1.1-.4 2.1-1.2 2.8L73.5 41.4c-.8.8-1.8 1.1-2.8 1.1-1 0-2-.4-2.8-1.2-1.6-1.6-1.6-4.2 0-5.7l5.5-5.6h-5.2zm5.3 20.6c-1.6-1.6-4.1-1.6-5.7 0-1.6 1.6-1.6 4.2 0 5.8l5.5 5.6h-5.2c-3.3 0-8.8-4.9-14.2-9.9-1.6-1.5-4.1-1.5-5.7.1-1.5 1.6-1.4 4.3.2 5.8 8.4 7.7 14 12 19.8 12h5.2l-5.5 5.3c-1.6 1.6-1.6 4 0 5.6.8.8 1.8 1.1 2.8 1.1 1 0 2-.4 2.8-1.2l12.3-12.3c.8-.8 1.2-1.8 1.2-2.8 0-1.1-.4-2.1-1.2-2.8L73.5 50.6zM9 30h5.4c4.2 0 10.5 5.4 15.5 9.9.8.7 1.7 1.1 2.7 1.1 1.1 0 2.2-.4 3-1.3 1.5-1.6 1.4-4.3-.3-5.8-7.8-7.1-14.4-12-20.9-12H9c-2.2 0-4 1.8-4 4S6.8 30 9 30z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12 fill-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-12 h-12" onClick={handlePlayPauseClick}>
                  {isPlaying ? (
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM9 8.25a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75H9Zm5.25 0a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75h-.75Z" clipRule="evenodd" />
                  ) : (
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                  )}
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12 fill-white stroke-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-white stroke-white w-12 h-12" viewBox="0 0 24 24" id="repeat"><g data-name="Layer 2"><path d="M17.91 5h-12l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.91 7h12a1.56 1.56 0 0 1 1.59 1.53V11a1 1 0 0 0 2 0V8.53A3.56 3.56 0 0 0 17.91 5zm.3 9.29a1 1 0 0 0-1.42 1.42l1.3 1.29h-12a1.56 1.56 0 0 1-1.59-1.53V13a1 1 0 0 0-2 0v2.47A3.56 3.56 0 0 0 6.09 19h12l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.42z" data-name="repeat"></path></g></svg>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ListeningBar;
