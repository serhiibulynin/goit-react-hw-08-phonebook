import styled from "styled-components";

const HeaderStyled = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid black;
  padding: 20px;

  .navLink {
    font-size: 24px;
    color: #0b1c5f;
    font-weight: 700;
    text-decoration: none;
    &:hover {
      color: #6e4ac2;
    }
  }
  .activeLink {
    color: #6e4ac2;
  }
  .mrLink {
    margin-right: 20px;
  }
`;

export default HeaderStyled;
