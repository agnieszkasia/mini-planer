import styled from "styled-components";
import { device } from "../styles/devices";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  transition: all 0.2s;
  cursor: pointer;
  color: unset;

  &:hover {
    color: ${(props) =>
      props.hoverColor ? props.hoverColor : "var(--color-grey-500)"};
  }

  & svg {
    width: ${(props) => (props.size === "small" ? "1rem" : "1.4rem")};
    height: ${(props) => (props.size === "small" ? "1rem" : "1.4rem")};
  }

  @media ${device.tablet} {
    & svg {
      width: ${(props) => (props.size === "small" ? "1.2rem" : "1.8rem")};
      height: ${(props) => (props.size === "small" ? "1.2rem" : "1.8rem")};
    }
  }
`;

export default ButtonIcon;
