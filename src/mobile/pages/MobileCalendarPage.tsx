import { memo } from "react";
import { navItems } from "../../App";
import MobileNavbar from "../components/MobileNavbar";

export const MobileCalendarPage = memo(() => {
  return (
    <>
      <h3>Mobile Calendar Page</h3>
      <MobileNavbar navItems={navItems} />
    </>
  );
});
