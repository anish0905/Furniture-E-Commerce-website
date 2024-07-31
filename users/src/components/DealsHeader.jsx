import React, { useState, useEffect } from 'react';

const DealsHeader = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function getTimeLeft() {
    const now = new Date();
    const endTime = new Date(now);
    endTime.setHours(200, 0, 0, 0); // Set to 20:00:00

    const totalSeconds = Math.max((endTime - now) / 1000, 0);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return { hours, minutes, seconds };
  }

  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-6  shadow-lg my-4">
      <h1 className="lg:text-3xl text-xl font-extrabold text-center mb-4 animate-slideLeftRight">
        Deals of the Week || Deals of the Day
      </h1>
      <div className="flex justify-center items-center space-x-4">
        {['hours', 'minutes', 'seconds'].map((unit, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="lg:text-4xl text-2xl font-bold bg-white text-blue-600 rounded-full p-4 shadow-lg">
              {String(timeLeft[unit]).padStart(2, '0')}
            </div>
            <span className="text-lg mt-2">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsHeader;
