"use client";
import IWorkout from "@/app/types/WorkoutType";
import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

interface ICrossButton {
  workout: IWorkout;
}

const CrossButton = ({ workout }: ICrossButton) => {
  const { planWorkout, setPlanWorkout } = useContext(
    WorkoutContext,
  ) as unknown as {
    planWorkout: IWorkout[];
    setPlanWorkout: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  };

  const handleCrossButton = (workout: IWorkout) => {
    const newPlanWorkout = planWorkout.filter((work) => work.id !== workout.id);
    setPlanWorkout(newPlanWorkout);
    toast.info(`${workout.name} is removed!`);
  };

  return (
    <div>
      <button onClick={() => handleCrossButton(workout)}>
        <RxCross2 className="text-md" />
      </button>
    </div>
  );
};

export default CrossButton;
