import React from "react";

const MyPlanLayout = () => {
  return (
    <div className="container mx-auto px-10 md:px-5 lg:px-5">
      <h1 className="pt-10 pb-2 text-3xl font-bold font-stretch-50%">
        MY PLAN
      </h1>
      <p className="text-[#8A92A0]">
        Cap of five lifts for today. Finish them, then load more.
      </p>
      <div className="bg-base-100 rounded-2xl grid grid-cols-1 md:grid-cols-5 my-5">
        <div>
          <p className="text-[#8A92A0] text-center pt-5 md:py-5 md:text-right">
            Exercise
          </p>
        </div>
        <div className=" divider mx-5 md:divider-horizontal md:my-3 md:mx-auto "></div>

        <div>
          <p className="text-[#8A92A0] text-center md:py-5">Minutes</p>
        </div>
        <div className=" divider mx-5 md:divider-horizontal md:my-3 md:mx-auto "></div>

        <div>
          <div>
            <p className="text-[#8A92A0] text-center pb-5 md:py-5 md:text-left">
              Calories
            </p>
          </div>
        </div>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box my-10 bg-black">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab rounded-2xl"
          aria-label="Todays Plan"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 my-5">
          Tab content 1
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab rounded-2xl"
          aria-label="Saved"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 my-5">
          Tab content 2
        </div>
      </div>
    </div>
  );
};

export default MyPlanLayout;
