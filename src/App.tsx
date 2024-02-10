import React from "react";
import About from "./components/About";
import BuyNow from "./components/BuyNow";
import CanvasContainer from "./components/CanvasContainer";
import Hero from "./components/Hero";

function App() {
  const [region, setRegion] = React.useState<string>("");
  return (
    <div>
      <div className="h-screen w-full fixed top-0 -z-10 hidden lg:block">
        <CanvasContainer region={region} />
      </div>
      <Hero />
      <About setRegion={setRegion} region={region} />
      <BuyNow setRegion={setRegion} />
    </div>
  );
}

export default App;
