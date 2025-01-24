import React, { useRef } from "react";
import { useAppRenderer } from "../hooks";
import { mount } from "dashboard";

const Dashboard = ({}) => {
  const ref = useRef(null);
  useAppRenderer(mount, ref);

  return <div ref={ref} />;
};

export default Dashboard;
