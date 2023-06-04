import { useState } from "react";
import githubIcon from "../../public/images/github-logo.png";
import linkedinIcon from "../../public/images/linkedin-logo.png";
import userIcon from "../../public/images/user.png";
import emailIcon from "../../public/images/email.png";

const FooterSection = () => {
  const [footerLinks, setFooterLinks] = useState([
    {
      id: 0,
      label: "Linked In",
      icon: linkedinIcon,
      link: "https://www.linkedin.com/in/scott-thompson-600ba8b3/",
    },
    {
      id: 1,
      label: "Github",
      icon: githubIcon,
      link: "https://github.com/thompsons90",
    },
    {
      id: 2,
      label: "Portfolio",
      icon: userIcon,
      link: "https://jovial-kalam-909864.netlify.app/",
    },
    {
      id: 3,
      label: "Email",
      icon: emailIcon,
      link: "https://www.linkedin.com/in/%F0%9F%A4%9Dscott-thompson-600ba8b3/",
    },
  ]);

  return (
    <div className="footer-section-container">
      <h2>Contact Me:</h2>
      <div className="footer-links-container">
        {footerLinks.map((data) => (
          <ul key={data.id}>
            <a href={data.link} target="_blank">
              <li>
                <img
                  className="footer-links"
                  src={data.icon}
                  alt="footer link icon"
                />
              </li>
            </a>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default FooterSection;
