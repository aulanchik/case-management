import { FC } from "react";
import { Navigation } from "./Navigation";
import { SidebarList, SidebarContainer } from "./styles";

const Sidebar: FC = () => {
  return (
    <SidebarContainer>
      <SidebarList>
        <Navigation />
      </SidebarList>
    </SidebarContainer>
  );
};

export default Sidebar;
