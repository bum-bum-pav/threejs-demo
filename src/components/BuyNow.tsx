import React from "react";

function BuyNow({ setRegion }: any) {
  const [isclicked, setIsClicked] = React.useState(false);

  //   function handleClick() {
  //     setRegion("shoulder");
  //     setIsClicked(true);
  //     const thirdSection = document.querySelector(".third-section");
  //     if (thirdSection) {
  //       console.log(thirdSection);
  //       thirdSection.classList.remove("third-section");
  //       thirdSection.classList.add("target");
  //     } else {
  //       const target = document.querySelector(".target");
  //       console.log(target);
  //       if (target) {
  //         target.classList.remove("target");
  //         target.classList.add("third-section");
  //       }
  //     }
  //   }

  function scrollToSection() {
    // Find the second section element
    const fourthSection = document.querySelector(".fourth-section");

    if (fourthSection) fourthSection.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="third-section h-screen w-full z-[10]">
      <div
        id="buttonText"
        onClick={() => setRegion("knee")}
        className="border w-10 h-10"
      >
        BuyNow {isclicked.toString()}
      </div>
      <div className="w-full absolute bottom-0 flex flex-row justify-center items-center">
        <button className="border border-black p-2" onClick={scrollToSection}>
          DEVAM
        </button>
      </div>
    </div>
  );
}

export default BuyNow;
