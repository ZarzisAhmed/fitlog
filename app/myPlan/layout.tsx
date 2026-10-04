import React from "react";
import MyPlanLayout from "../components/myPlanPage/MyPlanLayout";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <MyPlanLayout></MyPlanLayout>
      {children}
    </div>
  );
};

export default layout;
