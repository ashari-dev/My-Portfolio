import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const sosials = [
  {
    icon: <FaGithub />,
    path: "",
  },
  {
    icon: <FaLinkedinIn />,
    path: "",
  },
  {
    icon: <FaInstagram />,
    path: "",
  },
];
const Social = ({containerStayle, iconStayle}) => {
  return <div className={containerStayle}>
    {sosials.map((item, index)=>{
        return <Link key={index} href={item.path} className={iconStayle}>{item.icon}</Link>
    })}
  </div>;
};

export default Social;
