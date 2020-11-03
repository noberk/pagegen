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
              <ElementSlot>
                <Button>Normal</Button>
              </ElementSlot>
              <ElementSlot>
                <Button primary>Primary</Button>
              </ElementSlot>
            </div>
            <div></div>
          </div>
        </Aside>
        <Div>123213</Div>
      </CanvasContainer>
    </>
  );
}

export default Cavans;
