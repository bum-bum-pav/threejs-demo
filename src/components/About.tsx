import React from "react";

function About({ setRegion, region }: any) {
  return (
    <div className="second-section h-[150vh] w-full mt-96 relative">
      <div className="absolute top-[800px] left-[620px] flex flex-col justify-start items-center " onClick={() => region !== "origin" ? setRegion("origin") : setRegion("knee")}>
        <h1
          onClick={() =>
            region !== "origin" ? setRegion("origin") : setRegion("abdominis")
          }
          className=" text-[16px] text-justify mr-auto hover:-translate-x-5"
        >
          abdominis
        </h1>
        <div className="line"></div>
      </div>
      <div className="absolute top-[730px] left-[600px] flex flex-col justify-start items-center">
        <h1
          onClick={() =>
            region !== "origin" ? setRegion("origin") : setRegion("abdominis")
          }
          className=" text-[16px] text-justify mr-auto hover:-translate-x-5"
        >
          pectoralis major
        </h1>
        <div className="line"></div>
      </div>
      <div className="absolute top-[670px] left-[630px] flex flex-col justify-start items-center">
        <h1
          onClick={() =>
            region !== "origin" ? setRegion("origin") : setRegion("abdominis")
          }
          className=" text-[16px] text-justify mr-auto hover:-translate-x-5"
        >
          sternocleidomastoid
        </h1>
        <div className="line"></div>
      </div>
      <div className="absolute top-[740px] left-[1070px] flex flex-col-reverse justify-start items-center rotate-[180deg]">
        <h1
          onClick={() =>
            region !== "origin" ? setRegion("origin") : setRegion("abdominis")
          }
          className=" text-[16px] text-justify mr-auto rotate-180"
        >
          deltoid anterior
        </h1>
        <div className="line"></div>
      </div>
      <div className="absolute top-[670px] left-[1005px] flex flex-col-reverse justify-start items-center rotate-[180deg]">
        <h1
          onClick={() =>
            region !== "origin" ? setRegion("origin") : setRegion("abdominis")
          }
          className=" text-[16px] text-justify mr-auto rotate-180"
        >
          trapezius
        </h1>
        <div className="line"></div>
      </div>
      
      <div className="absolute top-[850px] left-[1020px] flex flex-col-reverse justify-start items-center rotate-[180deg]">
        <h1
          onClick={() =>
            region !== "origin" ? setRegion("origin") : setRegion("abdominis")
          }
          className=" text-[16px] text-justify mr-auto rotate-180"
        >
          external oblique
        </h1>
        <div className="line"></div>
      </div>
      
    </div>
  );
}

export default About;
