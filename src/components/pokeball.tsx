import React from "react";

const Pokeball: React.FC = () => {
  return (
    <div>
      {/* pokebal front */}
      <div className="relative w-24 h-24 rounded-full bg-red-500 border-4 border-black my-4 shadow-2xl animate-bounce">
        <div className="absolute bottom-0 w-full h-1/2 bg-gray-200 rounded-b-full border-b-4 border-t-2 border-t-black" />
        <div className="absolute  bottom-16 right-4 w-1 h-1 bg-gray-200 rounded-b-full border-b-4  rounded-s-full" />
        <div className="absolute  bottom-[4.3rem] right-6  w-3 h-3 bg-gray-200 rounded-b-full border-b-4  rounded-full" />
        <div className="absolute inset-0 w-8 h-8 m-auto bg-gray-200 border-2 border-black rounded-full" />
        <div className="absolute inset-0 w-4 h-4 m-auto bg-gray-500 border-2 border-black  rounded-full" />
      </div>
      {/* pokeball left*/}
      <div className="relative w-24 h-24 rounded-full bg-red-500 border-4 border-black my-4 shadow-2xl animate-bounce ">
        <div className="absolute bottom-0 w-full h-1/2 bg-gray-200 rounded-b-full border-b-4 border-t-2 border-t-black" />
        <div className="absolute  bottom-16 right-4 w-1 h-1 bg-gray-200 rounded-b-full border-b-4  rounded-s-full" />
        <div className="absolute  bottom-[4.3rem] right-6  w-3 h-3 bg-gray-200 rounded-b-full border-b-4  rounded-full" />
        <div className="absolute left-5 bottom-7 w-8 h-8 m-auto bg-gray-200 border-2 border-black rounded-full" />
        <div className="absolute left-7 bottom-9 w-4 h-4 m-auto bg-gray-500 border-2 border-black  rounded-full" />
      </div>
      {/* pokeball right*/}
      <div className="relative w-24 h-24 rounded-full bg-red-500 border-4 border-black my-4 shadow-2xl animate-bounce ">
        <div className="absolute bottom-0 w-full h-1/2 bg-gray-200 rounded-b-full border-b-4 border-t-2 border-t-black" />
        <div className="absolute  bottom-16 right-4 w-1 h-1 bg-gray-200 rounded-b-full border-b-4  rounded-s-full" />
        <div className="absolute  bottom-[4.3rem] right-6  w-3 h-3 bg-gray-200 rounded-b-full border-b-4  rounded-full" />
        <div className="absolute right-5 bottom-7 w-8 h-8 m-auto bg-gray-200 border-2 border-black rounded-full" />
        <div className="absolute right-7 bottom-9 w-4 h-4 m-auto bg-gray-500 border-2 border-black  rounded-full" />
      </div>
    </div>
  );
};

export default Pokeball;
const PokeballFront: React.FC = () => (
  <div className="relative flex flex-col justify-center items-center mb-4 ">
    {/* <div className="absolute bottom-2 w-[70%] h-1 bg-opacity-30 bg-black rounded-full animate-size " /> */}
    <div className="relative w-24 h-24 rounded-full bg-red-500 border-4 border-black my-4animate-bounce shadow-lg shadow-violet-700 animate-bounce">
      <div className="absolute bottom-0 w-full h-1/2 bg-gray-200 rounded-b-full border-b-4 border-t-2 border-t-black" />
      <div className="absolute bottom-16 right-4 w-1 h-1 bg-gray-200 rounded-b-full border-b-4 rounded-s-full" />
      <div className="absolute bottom-[4.3rem] right-6 w-3 h-3 bg-gray-200 rounded-b-full border-b-4 rounded-full" />
      <div className="absolute inset-0 w-8 h-8 m-auto bg-gray-200 border-2 border-black rounded-full" />
      <div className="absolute inset-0 w-4 h-4 m-auto bg-gray-500 border-2 border-black rounded-full" />
    </div>
  </div>
);

const PokeballLeft: React.FC = () => (
  <div className="relative flex flex-col justify-center items-center ">
    {/* <div className="absolute bottom-2 w-[70%] h-1 bg-opacity-30 bg-black rounded-full animate-size" /> */}
    <div className="relative w-24 h-24 rounded-full bg-red-500 border-4 border-black my-4 shadow-lg shadow-violet-700 animate-bounce">
      <div className="absolute bottom-0 w-full h-1/2 bg-gray-200 rounded-b-full border-b-4 border-t-2 border-t-black" />
      <div className="absolute bottom-16 right-4 w-1 h-1 bg-gray-200 rounded-b-full border-b-4 rounded-s-full" />
      <div className="absolute bottom-[4.3rem] right-6 w-3 h-3 bg-gray-200 rounded-b-full border-b-4 rounded-full" />
      <div className="absolute left-5 bottom-7 w-8 h-8 m-auto bg-gray-200 border-2 border-black rounded-full" />
      <div className="absolute left-7 bottom-9 w-4 h-4 m-auto bg-gray-500 border-2 border-black rounded-full" />
    </div>
  </div>
);

const PokeballRight: React.FC = () => (
  <div className="relative flex flex-col justify-center items-center">
    {/* <div className="absolute bottom-2 w-[70%] h-1 bg-opacity-30 bg-black rounded-full animate-size " /> */}
    <div className="w-24 h-24 rounded-full bg-red-500 border-4 border-black my-4 shadow-lg shadow-violet-700 animate-bounce">
      <div className="absolute bottom-0 w-full h-1/2 bg-gray-200 rounded-b-full border-b-4 border-t-2 border-t-black" />
      <div className="absolute bottom-16 right-4 w-1 h-1 bg-gray-200 rounded-b-full border-b-4 rounded-s-full" />
      <div className="absolute bottom-[4.3rem] right-6 w-3 h-3 bg-gray-200 rounded-b-full border-b-4 rounded-full" />
      <div className="absolute right-5 bottom-7 w-8 h-8 m-auto bg-gray-200 border-2 border-black rounded-full" />
      <div className="absolute right-7 bottom-9 w-4 h-4 m-auto bg-gray-500 border-2 border-black rounded-full" />
    </div>
  </div>
);

export { PokeballFront, PokeballLeft, PokeballRight };
