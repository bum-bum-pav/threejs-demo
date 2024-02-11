import React from "react";

export default function Bel() {
  function scrollToSection() {
    // Find the second section element
    const fifthSection = document.querySelector(".fifth-section");

    if (fifthSection) fifthSection.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="fourth-section h-screen w-full border relative flex justify-center items-start border-red-600">
      <div className="w-full absolute bottom-0 flex flex-row justify-center items-center">
        <button className="border border-black p-2" onClick={scrollToSection}>
          DEVAM
        </button>
      </div>
    </div>
  );
}
