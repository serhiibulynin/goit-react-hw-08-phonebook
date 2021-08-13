import styled from "styled-components";

const ContactListStyled = styled.div`
  padding: 20px;
  .ContactsTitle {
    margin-bottom: 20px;
  }
  .ContactListItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;
    font-weight: 700;
    padding: 12px;
    border: 1px solid #0b1c5f;
  }

  .ContactListItem + .ContactListItem {
    margin-top: 12px;
  }
  .ContactButton {
    margin-left: 20px;
  }
`;

export default ContactListStyled;
