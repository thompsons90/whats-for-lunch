import { memo } from "react";
import MobileNavbar from "../components/MobileNavbar";
import { navItems } from "../../App";

export const MobileAboutPage = memo(() => {
  return (
    <>
      <h3>Mobile About Page</h3>
      <MobileNavbar navItems={navItems} />
    </>
  );
});
