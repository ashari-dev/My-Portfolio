import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const sosials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/ashari-dev",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/muhammad-asharii/",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/m_asharii/profilecard/?igsh=MWxyd2g0b3oxdWhlaA==",
  },
];
const Social = ({ containerStayle, iconStayle }) => {
  return (
    <div className={containerStayle}>
      {sosials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStayle}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
