"use client";
import IWorkout from "@/app/types/WorkoutType";
import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";
import { FaRegCalendarPlus } from "react-icons/fa";
import { toast } from "react-toastify";

interface PlanButtonProps {
  workout: IWorkout;
}

const PlanButton = ({ workout }: PlanButtonProps) => {
  type WorkoutPlanContextType = {
    planWorkout: IWorkout[];
    setPlanWorkout: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  };

  const { planWorkout, setPlanWorkout } = useContext(
    WorkoutContext as unknown as React.Context<WorkoutPlanContextType>,
  );

  const handlePlanButton = () => {
    const planIdList: number[] = planWorkout.map((work) => work.id);
    if (planIdList.includes(workout.id)) {
      alert(`${workout.name} already exixts!`);
    } else {
      const newPlanWorkout = [...planWorkout, workout];
      setPlanWorkout(newPlanWorkout);
      toast.success(`${workout.name} is added successfully!`);
    }
  };
  return (
    <div>
      <button
        className="btn bg-[#CCFF00] text-black transition-all duration-200 hover:scale-110 active:scale-105 rounded-xl px-3 sm:px-7"
        onClick={handlePlanButton}
      >
        <FaRegCalendarPlus />
        Add to today&apos;s plan
      </button>
    </div>
  );
};

export default PlanButton;
