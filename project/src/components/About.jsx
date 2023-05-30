import React, { useState } from 'react';

const About = () => {
  const handleClick = () => {
    location.href = '/verification'
  }
  const screenWidth = window.screen.width;
  return (
    <div className="w-full m-auto max-w-[600px]">
      <div className="flex flex-col w-full items-center px-[20px]">
        <div className="w-[150px] flex-wrap justify-center py-[10px] p-[14px]">
          <img src="/stone-logo-black.svg" width={140} height={60} alt="" />
        </div>
        <div className="w-[101vw] mb-[20px]">
          <img src="/hero_stone_island.jpg" alt="" />
        </div>
        <div className="w-full flex flex-col justify-center">
          <p className="text-black tracking-normal leading-[1.37em] text-center text-[13.5px] font-semibold my-[10px]">
            WELCOME
          </p>
          <p className="text-black tracking-normal leading-[1.31em] text-center text-[12.5px] font-light mb-[32px]">
            You are about to verify the authenticity of your product and enjoy
            your exclusive experience.
          </p>
          <div className="w-full">
            <button className="w-full bg-black h-[55px]"
            onClick={handleClick}
            >
              <p className="text-center text-white uppercase text-[12.5px] font-semibold">
                Check Authenticity
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
