import styled, { css } from "styled-components";
import { device } from "../styles/devices";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 1.2rem 0;

      /* Box */
      background-color: var(--color-grey-0);
      border-radius: var(--border-radius-md);
      display: flex;
      flex-direction: column;
      align-items: center;

      @media ${device.tablet} {
        padding: 1.2rem 4rem;
      }
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1rem;
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
