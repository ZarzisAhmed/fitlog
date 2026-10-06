import React from "react";
import Image from "next/image";
import IWorkout from "@/app/types/WorkoutType";
import { IoMdTime } from "react-icons/io";
import { AiFillFire } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";

import Link from "next/link";
import CrossButton from "../myPlanPage/CrossButtonSave";

interface ISaveCard {
  workout: IWorkout;
}

const SaveCard = ({ workout }: ISaveCard) => {
  return (
    <div>
      <div className="card card-top md:card-side bg-base-100 shadow-sm">
        <figure className="bg-black">
          <Image
            src={`${workout.image}`}
            height={100}
            width={100}
            alt="Workout Image"
            className="w-full p-5 rounded-[30px]"
          ></Image>
        </figure>
        <div className="card-body space-y-2 bg-black">
          <h2 className="text-2xl font-bold font-stretch-50%">
            {workout.name}
          </h2>
          <p className="text-[#8A92A0]">{workout.equipment}</p>
          <div className="flex justify-between items-center sm:justify-start sm:gap-5">
            <div className="flex items-center gap-1">
              <IoMdTime className="text-[#C2F800] text-xl" />
              <p className="text-[#D1D5DB]">{workout.duration} min</p>
            </div>
            <div className="flex items-center gap-1">
              <AiFillFire className="text-[#C2F800] text-xl" />
              <p className="text-[#D1D5DB]">{workout.caloriesBurned} kcal</p>
            </div>
            <div className="flex items-center gap-1">
              <FaRegStar className="text-[#C2F800] text-xl" />
              <p className="text-[#D1D5DB]">{workout.rating} min</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 justify-around  items-center sm:justify-end sm:gap-5">
            <Link href={`/details/${workout.id}`}>
              {" "}
              <button className="btn border-gray-700 rounded-3xl w-50 sm:w-full">
                View Details
              </button>
            </Link>
            <CrossButton workout={workout}></CrossButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveCard;
