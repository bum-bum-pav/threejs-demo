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

  return (
    <div className="third-section h-screen w-full z-[10] mt-30">
      <div id="buttonText" onClick={() => setRegion("knee")} className="border w-10 h-10">
        BuyNow {isclicked.toString()}
      </div>
    </div>
  );
}

export default BuyNow;
