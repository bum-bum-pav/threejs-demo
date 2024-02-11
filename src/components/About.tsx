import React from "react";

function About({ setRegion, region }: any) {
  function scrollToSection() {
    // Find the second section element
    const thirdSection = document.querySelector(".third-section");

    if (thirdSection) thirdSection.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="second-section h-screen w-full relative border border-green-600">
      <div
        className="left-muscles absolute top-[400px] left-[620px] flex flex-col justify-start items-center group"
        onClick={() =>
          region !== "origin" ? setRegion("origin") : setRegion("knee")
        }
      >
        <h1
          onClick={() =>
            region !== "origin" ? setRegion("origin") : setRegion("abdominis")
          }
          className=" text-[16px] text-justify mr-auto group-hover:-translate-x-5 duration-100"
        >
          abdominis
        </h1>
        <div className="line group-hover:translate-x-5 duration-100"></div>
      </div>
      <div className="left-muscles absolute top-[400px] left-[600px] flex flex-col justify-start items-center">
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
      <div className="left-muscles absolute top-[470px] left-[630px] flex flex-col justify-start items-center">
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
      <div className="left-muscles absolute top-[500px] left-[1070px] flex flex-col-reverse justify-start items-center rotate-[180deg]">
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
      <div className="left-muscles absolute top-[530px] left-[1005px] flex flex-col-reverse justify-start items-center rotate-[180deg]">
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

      <div className="left-muscles absolute top-[620px] left-[880px] flex flex-col-reverse justify-start items-center rotate-[180deg]">
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
      <div className="w-full absolute bottom-0 flex flex-row justify-center items-center">
        <button className="border border-black p-2" onClick={scrollToSection}>
          DEVAM
        </button>
      </div>
    </div>
  );
}

export default About;
