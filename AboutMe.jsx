import React from 'react';

const AboutMe = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="text-2xl mr-2">😊</span>
            <h3 className="font-bold">Thả Thính</h3>
          </div>
          <p>Tuy anh không hoàn hảo, nhưng anh là duy nhất</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <span className="text-2xl mr-2">🐸</span>
            <h3 className="font-bold">Châm Ngôn</h3>
          </div>
          <p>Nơi đây không phải thiên đình nên quý khách đừng cho mình là thượng đế</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;