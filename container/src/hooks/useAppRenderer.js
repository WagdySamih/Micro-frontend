import { useEffect } from "react";

export const useAppRenderer = (mountFn, ref) => {
  useEffect(() => {
    if (ref?.current) mountFn(ref.current);
  }, []);
};
