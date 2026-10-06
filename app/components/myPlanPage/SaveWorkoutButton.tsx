"use client";
import IWorkout from "@/app/types/WorkoutType";
import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";
import { CiBookmark } from "react-icons/ci";

import { toast } from "react-toastify";

interface ISaveWorkoutButton {
  workout: IWorkout;
}

const SaveWorkoutButton = ({ workout }: ISaveWorkoutButton) => {
  type WorkoutPlanContextType = {
    saveWorkout: IWorkout[];
    setSaveWorkout: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  };

  const { saveWorkout, setSaveWorkout } = useContext(
    WorkoutContext as unknown as React.Context<WorkoutPlanContextType>,
  );

  const handleSaveButton = (workout: IWorkout) => {
    const saveIdList: number[] = saveWorkout.map((work) => work.id);
    if (saveIdList.includes(workout.id)) {
      alert(`${workout.name} already exixts!`);
    } else {
      const newSaveWorkout = [...saveWorkout, workout];
      setSaveWorkout(newSaveWorkout);
      toast.success(`${workout.name} is saved successfully!`);
    }
  };
  return (
    <div>
      <button
        className="btn transition-all duration-200 hover:scale-110 active:scale-105 rounded-xl px-3 sm:px-7"
        onClick={() => handleSaveButton(workout)}
      >
        <CiBookmark /> Save for later
      </button>
    </div>
  );
};

export default SaveWorkoutButton;
