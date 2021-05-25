import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/fa";
import * as IoIcons from "react-icons/fa";
import * as RiIcons from "react-icons/fa";

export const SiderData = [
  {
    title: "Overview",
    path: "/overview",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "User1",
        path: "/overview/users",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Users2",
        path: "/overview/users",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "User3",
        path: "/overview/users",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Users4",
        path: "/overview/users",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];
