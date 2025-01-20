import React, { useRef } from "react";
import { useAppRenderer } from "../hooks";
import { mount } from "auth";

const Auth = () => {
  const ref = useRef(null);
  useAppRenderer(mount, ref);

  return <div ref={ref} />;
};

export default Auth;
