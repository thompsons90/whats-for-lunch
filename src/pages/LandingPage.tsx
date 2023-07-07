import { memo } from "react";
import { useViewport } from "../hooks/useViewport";
import { DesktopLandingPage } from "../desktop/pages/DesktopLandingPage";
import { MobileLandingPage } from "../mobile/pages/MobileLandingPage";
import { navItems } from "../App";
import { NavProps } from "../utils/constants";

export const LandingPage = memo(() => {
  //? ----- if true: mobile view, if false: desktop view,
  const { width } = useViewport();
  const breakpoint = 600;

  return width < breakpoint ? (
    <MobileLandingPage navItems={navItems} />
  ) : (
    <DesktopLandingPage navItems={navItems} />
  );
});
