import GroupIcon from "@mui/icons-material/Group";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TranslateIcon from "@mui/icons-material/Translate";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import { ComponentType } from "react";

type Links = {
  title: string;
  url: string;
  icon: ComponentType;
};
export const links: Links[] = [
  { title: "Employees", url: "/", icon: GroupIcon },
  { title: "Skills", url: "/skills", icon: TrendingUpIcon },
  { title: "Languages", url: "/languages", icon: TranslateIcon },
  {
    title: "CVs",
    url: "/cvs",
    icon: ContactPageOutlinedIcon,
  },
];
