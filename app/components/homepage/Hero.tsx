import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[#222630]/50 my-10 container mx-auto rounded-2xl">
      <div className="py-20 px-10 md:grid grid-cols-2">
        <div className="space-y-8">
          <p className="text-[#C2F800] font-bold">WORKOUT LIBRARY</p>
          <h1 className="text-7xl font-bold">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>
          <p className="text-[#9CA3AF]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <button className="btn bg-[#C2F800] text-black font-bold transition-all duration-200 hover:scale-110 active:scale-100">
            BROWSE WORKOUT
          </button>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={"/banner.png"}
            width={450}
            height={450}
            alt="banner image"
            className="py-10"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Hero;
