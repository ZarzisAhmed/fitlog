"use client";
import React, { useState } from "react";
import { createContext } from "react";

export const WorkoutContext = createContext({});

const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [planWorkout, setPlanWorkout] = useState([]);
  const [saveWorkout, setSaveWorkout] = useState([]);
  const shareState = {
    planWorkout,
    setPlanWorkout,
    saveWorkout,
    setSaveWorkout,
  };
  return (
    <WorkoutContext.Provider value={shareState}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
