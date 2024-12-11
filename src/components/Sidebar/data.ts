import img from "@/img";

const navData = [
  {
    id: Math.random(),
    name: "All cases",
    icon: img.iconBriefcase,
    activeIcon: img.iconBriefcaseA,
    link: "/all",
  },
  {
    id: Math.random(),
    name: "Pending cases",
    icon: img.iconCircleThreeDots,
    activeIcon: img.iconCircleThreeDotsA,
    link: "/pending",
  },
  {
    id: Math.random(),
    name: "Accepted cases",
    icon: img.iconTick,
    activeIcon: img.iconTickA,
    link: "/accepted",
  },
  {
    id: Math.random(),
    name: "Rejected cases",
    icon: img.iconCross,
    activeIcon: img.iconCrossA,
    link: "/rejected",
  },
];

export default navData;
