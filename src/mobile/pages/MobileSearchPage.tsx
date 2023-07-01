import { memo } from "react";
import { navItems } from "../../App";
import MobileNavbar from "../components/MobileNavbar";

export const MobileSearchPage = memo(() => {
  return (
    <>
      <h3>Mobile Search Page</h3>
      <MobileNavbar navItems={navItems} />
    </>
  );
});
