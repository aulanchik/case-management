import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import colors from "@/theme/colors";

const SidebarContainer = styled.aside`
  width: 220px;
  background-color: ${colors.blue3};
  color: rgb(129, 133, 138);
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${colors.grey};
`;

const SidebarList = styled.ul`
  list-style-type: none;
  position: relative;
  top: 90px;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li<{ $active: boolean }>`
  padding: 0;
  width: 90%;
  border-radius: 0 10px 10px 0;

  ${(props) =>
    props.$active &&
    css`
      color: ${colors.white};
      font-weight: bold;
      background-color: ${colors.blue2};
    `}
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  text-decoration: none;
  font-size: 14px;
  color: #2e3b52;
  line-height: 16px;
  font-weight: 500;
  padding: 18px 20px;
  display: flex;
  align-items: center;
  gap: 1rem;

  ${(props) =>
    props.$active &&
    css`
      font-weight: bold;
      color: ${colors.blue2};
      color: ${colors.white};
    `}
`;

export { SidebarContainer, SidebarList, ListItem, NavLink };
