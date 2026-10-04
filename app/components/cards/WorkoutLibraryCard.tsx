import React from "react";
import Image from "next/image";
import IWorkout from "@/app/types/WorkoutType";
import { IoMdTime } from "react-icons/io";
import { AiFillFire } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";

export interface IWorkoutLIbraryCard {
  workout: IWorkout;
}

const WorkoutLibraryCard = ({ workout }: IWorkoutLIbraryCard) => {
  return (
    <Link href={`/details/${workout.id}`}>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <Image
            width={100}
            height={100}
            alt={`${workout.name}`}
            src={workout.image}
            className="w-full "
          ></Image>
        </figure>
        <div className="card-body">
          <div className="flex gap-3">
            {workout.muscleGroups.map((muscle: string, ind: number) => (
              <div
                key={ind}
                className="badge bg-[#C2F800] text-black font-bold rounded-2xl"
              >
                {muscle}
              </div>
            ))}
          </div>
          <h2 className="card-title text-3xl font-stretch-60% font-extrabold">
            {workout.name}
          </h2>
          <p className="text-[#9CA3AF]">{workout.equipment}</p>
          <div className="divider"></div>
          <div className="flex justify-between">
            <p className="flex items-center gap-1  text-[#9CA3AF]">
              <IoMdTime /> {workout.duration} min
            </p>
            <p className="flex items-center gap-1 text-[#9CA3AF]">
              <AiFillFire /> {workout.caloriesBurned} kcal
            </p>
            <p className="flex items-center gap-1 text-[#9CA3AF]">
              <FaRegStar /> {workout.rating}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutLibraryCard;
