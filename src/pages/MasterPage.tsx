import { FC, ReactNode } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../navbar/Navbar";
import { navItems } from "../App";

interface MasterPageProps {
  pageContent: ReactNode;
}

const MasterPage: FC<MasterPageProps> = ({ pageContent }) => {
  return (
    <div className="page-wrapper">
      <div>
        <Navbar navItems={navItems} />
      </div>
      <div className="page-content-container">{pageContent}</div>
    </div>
  );
};

export default MasterPage;
