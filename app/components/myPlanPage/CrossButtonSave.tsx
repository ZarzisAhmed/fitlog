"use client";
import IWorkout from "@/app/types/WorkoutType";
import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

interface ICrossButtonSave {
  workout: IWorkout;
}

const CrossButtonSave = ({ workout }: ICrossButtonSave) => {
  const { saveWorkout, setSaveWorkout } = useContext(
    WorkoutContext,
  ) as unknown as {
    saveWorkout: IWorkout[];
    setSaveWorkout: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  };

  const handleCrossButton = (workout: IWorkout) => {
    const newSaveWorkout = saveWorkout.filter((work) => work.id !== workout.id);
    setSaveWorkout(newSaveWorkout);
    console.log(saveWorkout);
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

export default CrossButtonSave;
