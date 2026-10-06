"use client";
import IWorkout from "@/app/types/WorkoutType";
import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";

const MyPlanLayout = () => {
  const { planWorkout } = useContext(WorkoutContext) as {
    planWorkout: IWorkout[];
  };

  const totalDuration: number = planWorkout.reduce(
    (total: number, workout: IWorkout) => total + Number(workout.duration),
    0,
  );

  const totalCalories: number = planWorkout.reduce(
    (total, workout) => total + Number(workout.caloriesBurned),
    0,
  );

  return (
    <div className="container mx-auto px-10 md:px-5">
      <h1 className="pt-10 pb-2 text-3xl font-bold font-stretch-50%">
        MY PLAN
      </h1>
      <p className="text-[#8A92A0]">
        Cap of five lifts for today. Finish them, then load more.
      </p>
      <div className="bg-base-100 rounded-2xl grid grid-cols-1 md:grid-cols-5 my-5">
        <div className="flex flex-col justify-center pt-4 items-center ">
          <p className="text-[#8A92A0] text-center   md:pb-5 md:text-right">
            Exercise
          </p>
          <p className="text-3xl font-bold text-[#C2F800]">
            {planWorkout.length}
          </p>
        </div>
        <div className=" divider mx-5 md:divider-horizontal md:my-3 md:mx-auto "></div>

        <div className="flex flex-col justify-center  items-center">
          <p className="text-[#8A92A0] text-center md:py-5">Minutes</p>
          <p className="text-3xl font-bold ">{totalDuration}</p>
        </div>
        <div className=" divider mx-5 md:divider-horizontal md:my-3 md:mx-auto "></div>

        <div>
          <div className="flex flex-col justify-center pb-4 items-center">
            <p className="text-[#8A92A0] text-center pb-5 md:py-5 md:text-left">
              Calories
            </p>
            <p className="text-3xl font-bold">{totalCalories}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlanLayout;
