import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col p-8 bg-[#fff3e0]">
      <h1 className="text-5xl font-bold mb-4">Love Every Burger</h1>
      <p className="mb-6 max-w-2xl">
        We serve the best burgers on the planet, paving the way for cooking and preparing hot, delicious burgers.
      </p>
      <button className="bg-yellow-500 text-white px-6 py-2 rounded-md w-max">
        Bite Now
      </button>
      <div className="mt-8">
        <img src="/api/placeholder/400/200" alt="Delicious burger" className="w-full max-w-2xl object-cover" />
      </div>
    </div>
  );
};

export default Hero;