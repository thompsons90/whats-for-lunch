import { memo } from "react";
import { useViewport } from "../hooks/useViewport";
import DesktopCalendarPage from "../desktop/pages/DesktopCalendarPage";
import { MobileCalendarPage } from "../mobile/pages/MobileCalendarPage";

const CalendarPage = memo(() => {
  //? ----- if true: mobile view, if false: desktop view,
  const { width } = useViewport();
  const breakpoint = 600;

  return width < breakpoint ? <MobileCalendarPage /> : <DesktopCalendarPage />;
});

export default CalendarPage;
