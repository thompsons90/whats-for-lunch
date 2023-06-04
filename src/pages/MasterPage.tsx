import { FC, ReactNode } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../navbar/Navbar";
import { navItems } from "../App";
import { MasterPageProps } from "../utils/constants";
import FooterSection from "../footer/Footer";

const MasterPage: FC<MasterPageProps> = ({ pageContent }) => {
  return (
    <div className="master-page-wrapper">
      <div>
        <Navbar navItems={navItems} />
      </div>
      <div className="page-content-container">{pageContent}</div>
      <div>
        <FooterSection />
      </div>
    </div>
  );
};

export default MasterPage;
