import React from 'react';
import { Button } from "@/components/ui/button";

const ProfileCard = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 text-center">
      <img src="/placeholder.svg" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-2">NGO XUAN KHANH LAP</h2>
      <p className="text-blue-400 mb-4">/////////////</p>
      <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Quét Mã QR-Code
      </Button>
    </div>
  );
};

export default ProfileCard;