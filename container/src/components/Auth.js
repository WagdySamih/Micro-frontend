import React, { useRef } from "react";
import { useAppRenderer } from "../hooks";
import { mount } from "auth";

const Auth = ({ onSignIn }) => {
  const ref = useRef(null);
  useAppRenderer(mount, ref, onSignIn);

  return <div ref={ref} />;
};

export default Auth;
