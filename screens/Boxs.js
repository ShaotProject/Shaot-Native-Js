import React, { useState } from "react";
import { Box } from "./Box";
import { shift } from "../../unit/shift";

export const Boxs = () => {
  const [activeBox, setActiveBox] = useState(0);

  const handleBoxClick = (boxIndex) => {
    setActiveBox(boxIndex);
  };

  return (
    <>
    Shift
    </>
  );
};
