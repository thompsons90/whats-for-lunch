import { memo } from "react";
import { navItems } from "../../App";
import MobileNavbar from "../components/MobileNavbar";

export const MobileCookbookPage = memo(() => {
  return (
    <>
      <h3>Mobile Cookbook Page</h3>
      <MobileNavbar navItems={navItems} />
    </>
  );
});
