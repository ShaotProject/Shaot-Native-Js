import React, { useState } from "react";
import { Box } from "../components/BoxShift";
import { shift } from "../../unit/shift";

export const ShiftWeekScreen = () => {
  const [activeBox, setActiveBox] = useState(0);

  const handleBoxClick = (boxIndex) => {
    setActiveBox(boxIndex);
  };

  return <>Shift Week Screen</>;
};
