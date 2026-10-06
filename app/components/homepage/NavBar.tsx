"use client";
import Link from "next/link";
import React, { useContext } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { WorkoutContext } from "@/context/WorkoutContext";

const NavBar = () => {
  const pathname = usePathname();
  const { planWorkout = [] } = useContext(WorkoutContext) as {
    planWorkout?: unknown[];
  };
  const { saveWorkout = [] } = useContext(WorkoutContext) as {
    saveWorkout?: unknown[];
  };
  const links = (
    <>
      <div className="">
        <Link href={"/"} className="px-3">
          <button
            className={`btn rounded-2xl ${pathname === "/" ? "bg-[#C2F800]/30 text-[#C2F800]" : "font-bold bg-black border-0 hover:bg-[#C2F800]/50 hover:text-[#C2F800]"}`}
          >
            Workouts
          </button>
        </Link>
        <Link href={"/myPlan"} className="px-3">
          <button
            className={`btn rounded-2xl ${pathname === "/myPlan" ? "bg-[#C2F800]/30 text-[#C2F800]" : "font-bold bg-black border-0 hover:bg-[#C2F800]/50 hover:text-[#C2F800]"}`}
          >
            My Plan
          </button>
        </Link>
      </div>
    </>
  );
  return (
    <div className="border-b-2 border-[#2D313B]">
      <div className="navbar bg-black shadow-sm container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href={"/"} className="flex justify-between items-center gap-3">
            <Image src={"/logo.png"} alt="logo" width={50} height={50}></Image>
            <h1 className="text-3xl font-extrabold">FITLOG</h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          <Link href={"/myPlan"} className="font-bold">
            Plan{" "}
            <span className="text-black bg-[#C2F800] py-1 px-2.5 rounded-2xl">
              {planWorkout.length}
            </span>
          </Link>
          <Link href={"/myPlan"} className="font-bold">
            Saved{" "}
            <span className="text-black bg-[#C2F800] py-1 px-2.5 rounded-2xl">
              {saveWorkout.length}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
