import { memo } from "react";
import { useViewport } from "../../hooks/useViewport";
import { MobileCalendarPage } from "../../mobile/pages/MobileCalendarPage";
import DesktopCalendarPage from "../../desktop/pages/DesktopCalendarPage";

export const SearchPage = memo(() => {
  //? ----- if true: mobile view, if false: desktop view,
  const { width } = useViewport();
  const breakpoint = 600;

  return width < breakpoint ? <MobileCalendarPage /> : <DesktopCalendarPage />;
});
