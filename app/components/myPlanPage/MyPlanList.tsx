"use client";
import IWorkout from "@/app/types/WorkoutType";
import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";
import MyPlanCard from "../cards/MyPlanCard";
import SaveCard from "../cards/SaveCard";
import NotFoundPage from "./NotFoundPage";

const MyPlanList = () => {
  const { planWorkout, saveWorkout } = useContext(WorkoutContext) as {
    planWorkout: IWorkout[];
    saveWorkout: IWorkout[];
    isSaved: boolean;
    setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
  };

  return (
    <div className="container mx-auto px-10 md:px-5">
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box my-10 bg-black">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab rounded-2xl"
          aria-label="Todays Plan"
          defaultChecked
        />
        <div className="tab-content  border-base-300 p-6 my-5">
          {planWorkout.length === 0 ? (
            <NotFoundPage></NotFoundPage>
          ) : (
            planWorkout.map((workout: IWorkout) => (
              <MyPlanCard key={workout.id} workout={workout}></MyPlanCard>
            ))
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab rounded-2xl"
          aria-label="Saved"
        />
        <div className="tab-content  border-base-300 p-6 my-5">
          {saveWorkout.length === 0 ? (
            <NotFoundPage></NotFoundPage>
          ) : (
            saveWorkout.map((workout: IWorkout) => (
              <SaveCard key={workout.id} workout={workout}></SaveCard>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlanList;
