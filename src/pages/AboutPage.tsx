import { memo } from "react";
import { DesktopAboutPage } from "../desktop/pages/DesktopAboutPage";
import { useViewport } from "../hooks/useViewport";
import { MobileAboutPage } from "../mobile/pages/MobileAboutPage";

export const AboutPage = memo(() => {
  //? ----- if true: mobile view, if false: desktop view,
  const { width } = useViewport();
  const breakpoint = 600;

  return width < breakpoint ? <MobileAboutPage /> : <DesktopAboutPage />;
});
