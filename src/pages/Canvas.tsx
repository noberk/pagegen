import React from "react";
import { GRID16 } from "../assets/svg";
import { CanvasContainer, Div } from "../components/Layout";

function Cavans() {
  return (
    <>
      <CanvasContainer style={{ height: 600, background: `url(${GRID16})` }}>
        <Div>123213</Div>
      </CanvasContainer>
    </>
  );
}

export default Cavans;
