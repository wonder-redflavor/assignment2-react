import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StContainer>
      <h1>My Todo List</h1>
      <div>React</div>
    </StContainer>
  );
};
export default Header;

const StContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 60px;
  padding: 0 20px;
  margin: 25px 0px;
  color: rgb(9, 68, 56);
`;
