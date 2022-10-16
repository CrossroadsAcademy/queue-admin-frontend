import React from "react";
import classes from "./sidebar.module.css";
import { Icon } from "@iconify/react";
import { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState(1);

  const sideBarItems = [
    {
      id: 1,
      name: "Dashboard",
      icon: "ant-design:dashboard-outlined",
      link: "/",
    },
    {
      id: 2,
      name: "Set Up Queue",
      icon: "clarity:users-line",
      link: "/queue",
    },
    {
      id: 3,
      name: "Staff",
      icon: "clarity:employee-line",
      link: "/staff",
    },
    {
      id: 4,
      name: "Profile",
      icon: "iconoir:profile-circled",
      link: "/profile",
    },
  ];

  return (
    <div className={classes.wrapper}>
      {sideBarItems.map((item) => (
        // Need to change into appropriate redirecting component after router package installation.
        <a
          href={item.link}
          onClick={() => setActive(item.id)}
          className={`${classes.listItem} ${
            active == item.id && classes.active
          }`}
        >
          <Icon icon={item.icon} width={26} />
          <span>{item.name}</span>
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
