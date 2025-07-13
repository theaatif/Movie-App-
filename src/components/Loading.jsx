import React, { useState, useEffect } from 'react';

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('Loading');

  const loadingTexts = ['Loading', 'Fetching Movies', 'Preparing Cinema', 'Almost Ready'];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    const textInterval = setInterval(() => {
      setCurrentText(prev => {
        const currentIndex = loadingTexts.indexOf(prev);
        const nextIndex = (currentIndex + 1) % loadingTexts.length;
        return loadingTexts[nextIndex];
      });
    }, 50);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 gap-1 h-full w-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div
              key={i}
              className="rounded-sm animate-pulse"
              style={{
                backgroundColor: '#6556CD',
                animationDelay: `${i * 0.1}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Main loader container */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Film strip animation */}
        <div className="relative">
          {/* Center circle with film reel */}
          <div className="w-32 h-32 rounded-full relative overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
            {/* Film strip perforations around the edge */}
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-1 rounded-sm"
                style={{
                  backgroundColor: '#6556CD',
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * 15}deg) translateY(-58px)`
                }}
              />
            ))}
            
            {/* Rotating film frames */}
            <div className="absolute inset-4 rounded-full animate-spin" style={{ animationDuration: '4s' }}>
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-4 h-3 rounded-sm border opacity-80"
                  style={{
                    backgroundColor: 'rgba(101, 86, 205, 0.2)',
                    borderColor: '#6556CD',
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-35px)`
                  }}
                />
              ))}
            </div>
            
            {/* Inner spinning movie camera aperture */}
            <div className="absolute inset-8 rounded-full animate-spin overflow-hidden" 
                 style={{ 
                   background: `conic-gradient(from 0deg, #6556CD, #5947b8, #6556CD)`,
                   animationDirection: 'reverse', 
                   animationDuration: '2s' 
                 }}>
              {/* Aperture blades */}
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-0.5 bg-black"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${i * 22.5}deg)`,
                    transformOrigin: 'center'
                  }}
                />
              ))}
              
              {/* Center lens */}
              <div className="absolute inset-2 bg-black rounded-full border-2 border-opacity-30" style={{ borderColor: '#6556CD' }}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full opacity-60" />
                </div>
              </div>
            </div>
            
            {/* Spinning film spokes */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '6s' }}>
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-16 opacity-40"
                  style={{
                    backgroundColor: '#6556CD',
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${i * 90}deg)`,
                    transformOrigin: 'center'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Orbiting movie icons */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-6 h-6 flex items-center justify-center rounded-full animate-ping"
              style={{
                backgroundColor: '#6556CD',
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 120}deg) translateY(-80px)`,
                animationDelay: `${i * 0.5}s`
              }}
            >
              <div className="text-white text-xs font-bold">
                {i === 0 ? '▶' : i === 1 ? '🎬' : '🎭'}
              </div>
            </div>
          ))}
        </div>

        {/* Loading text with typewriter effect */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2 tracking-wider">
            {currentText}
            <span className="inline-block w-1 h-6 ml-1 animate-pulse" style={{ backgroundColor: '#6556CD' }} />
          </h2>
        </div>

        {/* Bottom decorative elements */}
        <div className="flex space-x-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-8 rounded-full animate-pulse"
              style={{
                backgroundColor: '#6556CD',
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1.5s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Corner decorations */}

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full animate-bounce opacity-40"
          style={{
            backgroundColor: '#6556CD',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};

export default Loading;