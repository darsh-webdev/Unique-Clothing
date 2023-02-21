import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    display: flex;
    margin-right: auto !important;
  }
`;

export const FormContainer = styled.form`
  height: 100px;
  width: 500px;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
  width: 100%;
`;
