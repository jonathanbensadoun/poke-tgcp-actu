import React from "react";

const Pokeball: React.FC = () => {
  return (
    <div className="relative w-24 h-24 rounded-full bg-red-500 border-4 border-black">
      <div className="absolute bottom-0 w-full h-1/2 bg-white rounded-b-full border-b-4" />
      <div className="absolute inset-0 w-8 h-8 m-auto bg-white border-4 border-black rounded-full" />
      <div className="absolute inset-0 w-4 h-4 m-auto bg-gray-500 border-2 border-black rounded-full" />
    </div>
  );
};

export default Pokeball;
