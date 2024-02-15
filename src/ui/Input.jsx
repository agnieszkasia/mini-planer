import styled from "styled-components";
import { device } from "../styles/devices";

const Input = styled.input`
  border: none;
  border-bottom: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  padding: 0.4rem 0;
  font-size: 1rem;
  font-variant: small-caps;
  min-width: ${({ $autowidth }) => ($autowidth ? "unset" : "20rem")};

  &:focus {
    outline: none;
  }

  @media ${device.tablet} {
    font-size: 1.2rem;
    padding: 0.4rem;
  }
`;

export default Input;
