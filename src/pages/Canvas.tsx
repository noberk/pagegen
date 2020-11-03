import React from "react";

import { GRID16 } from "../assets/svg";
import { Aside, Button, CanvasContainer, Div } from "../components/Layout";
import { ElementSlot } from "../components/Interaction";

function Cavans() {
  return (
    <>
      <CanvasContainer style={{ height: 600, background: `url(${GRID16})` }}>
        <Aside>
          <div>
            <div>
              <header>Components</header>
              <ElementSlot>
                <Button>Button</Button>
              </ElementSlot>
              <ElementSlot>
                <Button>Input</Button>
              </ElementSlot>
            </div>
            <div>
              <header>Boxes</header>
              <ElementSlot>
                <Button primary>Area</Button>
              </ElementSlot>
              <ElementSlot>
                <Button primary>TableArea</Button>
              </ElementSlot>
            </div>
          </div>
        </Aside>
      </CanvasContainer>
    </>
  );
}

export default Cavans;
