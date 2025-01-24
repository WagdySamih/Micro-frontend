import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useAppRenderer = (mountFn, ref, onSignIn) => {
  const history = useHistory();

  const onNavigate = ({ pathname: nextPathname }) => {
    const { pathname } = history.location;
    if (pathname !== nextPathname) history.push(nextPathname);
  };

  useEffect(() => {
    if (!ref?.current) return;
    const { onParentNavigate } = mountFn(ref.current, {
      onNavigate,
      initialPath: history.location.pathname,
      onSignIn,
    });
    if (onParentNavigate) history.listen(onParentNavigate);
  }, []);
};
