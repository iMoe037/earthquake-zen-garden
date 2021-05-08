import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Routes } from "../../constants";
import { Colors } from "../../styles/colors";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: ${Colors.lightGray};
`;

const H2 = styled.h2`
  color: ${Colors.midGray};
  padding: 0 10px;
`;

const Header = ({ profile }) => {
  const renderWelcomeMessage = () => {
    if (!profile || !profile.firstName) {
      return "Welcome user";
    }

    return `Welcome ${profile.firstName}`;
  };

  return (
    <Nav>
      <Link to={Routes.HOME}>
        <img
          src="https://www.realtor.com/realtor-com.png"
          alt=""
          width="30vh"
        />
      </Link>
      <H2>Earthquake Zen Garden</H2>
      <Link to={Routes.PROFILE}>{renderWelcomeMessage()}</Link>
    </Nav>
  );
};

export default Header;
