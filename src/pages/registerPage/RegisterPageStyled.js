import styled from "styled-components";

const RegisterPageStyled = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    color: #6e4ac2;
    margin-bottom: 20px;
  }
  .FormEditor {
    display: flex;
    flex-direction: column;
    padding: 12px;
    width: 400px;
    border: 1px solid;
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    margin-bottom: 16px;
  }

  .FormEditorInput {
    color: #171718;
    font: inherit;
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #bdbdbd;
    width: 370px;
    margin-bottom: 20px;
  }
`;

export default RegisterPageStyled;
