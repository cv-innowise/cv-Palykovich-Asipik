import GroupIcon from "@mui/icons-material/Group";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TranslateIcon from "@mui/icons-material/Translate";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import { ComponentType } from "react";

type Links = {
  titleKey: string;
  url: string;
  icon: ComponentType;
};

export const links: Links[] = [
  { titleKey: "links.employees", url: "/", icon: GroupIcon },
  { titleKey: "links.skills", url: "/skills", icon: TrendingUpIcon },
  { titleKey: "links.languages", url: "/languages", icon: TranslateIcon },
  {
    titleKey: "links.cvs",
    url: "/cvs",
    icon: ContactPageOutlinedIcon,
  },
];
