import gsap from "gsap";
import React, { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
//   useLayoutEffect(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".square",
//         scrub: true,
//         start: 0,
//         end: "bottom",
//         markers: true,
//       },
//     });

//     tl.to(".square", {
//       x: 100,
//       duration: 5,
//     });
//   });

  return (
    <div className="first-section h-screen w-full border relative flex justify-center items-start">
      <h1 className="square text-[13em]">PHANTOM</h1>
    </div>
  );
}

export default Hero;
