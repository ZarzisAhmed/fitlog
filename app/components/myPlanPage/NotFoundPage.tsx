import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="my-15 flex flex-col items-center justify-center space-y-7">
      <h1 className="text-2xl font-bold font-stretch-70%">NOTHING HERE YET</h1>
      <p className="text-[#A1A1AA] text-center">
        Browse the library and add a lift to get today moving.
      </p>
      <Link href={"/"}>
        <button className="btn rounded-3xl bg-[#C2F800] text-black font-bold">
          Go to workouts
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
