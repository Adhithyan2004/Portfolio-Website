import React from "react";

const ContCnt = () => {
  return (
    <div className="mx-16 ">
      <h1 className="text-[30vh] text-secondary w-[180vh] leading-[22vh] my-20 mb-20">
        Let's <span className="text-black">work</span> together{" "}
      </h1>
      <p className="text-5xl text-secondary w-[140vh] my-8">
        If you're <span className="text-black">interested</span> in discussing potential opportunities
        or collaborations, please don't hesitate to reach out{" "}
        <span className="text-black">via email.</span>
      </p>
      <div className="my-10">
        <p className="text-secondary text-2xl">EMAIL</p>
        <p className="text-4xl">adhibanugopan@gmail.com</p>
      </div>
      <div className="my-10">
        <p className="text-secondary text-2xl">PHONE</p>
        <p className="text-4xl">+91 6380274793</p>
      </div>
    </div>
  );
};

export default ContCnt;
