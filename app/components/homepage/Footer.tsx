import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="divider"></div>
      <div className="container mx-auto grid grid-cols-2 justify-between items-center px-10 sm:px-0">
        <div className="flex items-center gap-2">
          <Image
            src={"/footerLogo.png"}
            alt="footerLogo"
            height={40}
            width={40}
          ></Image>
          <p className="text-2xl font font-extrabold">FITLOG</p>
        </div>
        <div>
          <p className="text-[#6B7280]">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
