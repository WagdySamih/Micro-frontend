import React, { useRef } from "react";
import { useAppRenderer } from "../hooks";
import { mount } from "marketing";

const Marketing = () => {
  const ref = useRef(null);
  useAppRenderer(mount, ref);

  return <div ref={ref} />;
};

export default Marketing;
