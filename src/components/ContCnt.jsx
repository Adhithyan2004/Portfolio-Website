import React from "react";

const ContCnt = () => {
  return (
    <div className="mx-16 CntCntr ">
      <h1 className="CntTtl text-[30vh] text-secondary w-[180vh] leading-[22vh] my-20 mb-20">
        Let's <span className="text-black">work</span> together{" "}
      </h1>
      <p className="CntPara text-5xl text-secondary w-[140vh] my-8">
        Feel free to reach out via{" "}
        <span className="text-blk">email—always</span> happy to connect or chat
        about <span className="text-blk">interesting ideas.</span>
      </p>
      <div className="my-10 CntWays">
        <p className="text-2xl Cntmail text-secondary">EMAIL</p>
        <p className="text-4xl Cntml">adhibanugopan@gmail.com</p>
      </div>
      <div className="my-10 CntWays">
        <p className="text-2xl Cntphn text-secondary">PHONE</p>
        <p className="text-4xl Cntph">+91 6380274793</p>
      </div>
    </div>
  );
};

export default ContCnt;
