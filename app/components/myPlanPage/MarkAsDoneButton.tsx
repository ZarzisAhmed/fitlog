"use client";
import IWorkout from "@/app/types/WorkoutType";
import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";
interface IMardAsDoneButton {
  workout: IWorkout;
}

const MarkAsDoneButton = ({ workout }: IMardAsDoneButton) => {
  const { planWorkout, setPlanWorkout } = useContext(WorkoutContext) as {
    planWorkout: IWorkout[];
    setPlanWorkout: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  };
  const handleMarkAsDone = (workout: IWorkout) => {
    const newPlanWorkout = planWorkout.filter((work) => work.id !== workout.id);
    setPlanWorkout(newPlanWorkout);
    toast.success(`${workout.name} is done!`);
  };
  return (
    <div>
      <button
        className="btn  bg-[#C2F800] border-0 text-black rounded-3xl w-50 sm:w-full"
        onClick={() => handleMarkAsDone(workout)}
      >
        <FaCheck /> Mark As Done
      </button>
    </div>
  );
};

export default MarkAsDoneButton;
