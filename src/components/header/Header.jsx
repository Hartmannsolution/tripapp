import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LoginContainer from "../login/LoginContainer";
import { useAuth } from "../../hooks/AuthContext";

// Styled Components
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) =>
    props.theme.lightSkyBlue}; /* Light rose color */
  color: ${(props) => props.theme.darkBlue}; /* Dark blue color */
  padding: 8px 8px 8px 0px; // Example: Top, Right, Bottom, Left
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  // Responsive adjustments
  @media (max-width: 768px) {
    padding: 12px 16px; // Reduce padding on smaller screens
    flex-direction: column; // Stack elements vertically if space is limited
    align-items: flex-start; // Align elements to the left
  }
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  margin-left: 16px;
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 16px;
  // flex-grow: 1; // This allows the NavMenu to take up available space

  a {
    text-decoration: none;
    color: ${(props) => props.theme.darkGrey}; /* Dark blue color */
    padding: 8px 12px;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;

    &.active {
      background-color: ${(props) =>
        props.theme
          .skyBlue}; /* Slightly darker sky blue color for active links */
      color: #fff;
    }

    &:hover {
      background-color: ${(props) =>
        props.theme.deepSkyBlue}; /* Slightly darker sky blue color for hover */
      color: #fff;
    }
  }
`;

const Header = ({ headers }) => {
  const { user } = useAuth();
  return (
    <HeaderContainer>
      <Logo>Logo</Logo>
      <NavMenu>
        <NavLink
          to="/"
          exact="true"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        {headers // Filter out headers that the user does not have access to
        .filter(header=>header.allowedRoles.includes(user.roles)||header.allowedRoles.includes("none"))
        .map((header, index) => (
          <NavLink
            key={index}
            to={header.url}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {header.title}
          </NavLink>
        ))}
      </NavMenu>
      <LoginContainer />
    </HeaderContainer>
  );
};

export default Header;
