import React from "react";
import WorkoutLibraryCard from "../cards/WorkoutLibraryCard";
import IWorkout from "@/app/types/WorkoutType";

const getWorkoutLibrary = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  return res.json();
};

const WorkoutLibrary = async () => {
  const workouts = await getWorkoutLibrary();
  console.log(workouts);
  return (
    <div className="container mx-auto space-y-5 ">
      <h1 className="text-4xl font-bold text-center lg:text-left px-10">
        THE LIBRARY
      </h1>
      <p className="text-[#9CA3AF] text-center lg:text-left px-10">
        Twelve lifts covering every major muscle group.
      </p>
      <div className="container mx-auto grid grid-cols-1 px-10 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout: IWorkout) => (
          <WorkoutLibraryCard
            key={workout.id}
            workout={workout}
          ></WorkoutLibraryCard>
        ))}
      </div>
    </div>
  );
};

export default WorkoutLibrary;
