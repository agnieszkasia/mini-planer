import styled, { css } from "styled-components";
import { device } from "../styles/devices";

const sizes = {
  small: css`
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 300;
    text-align: center;
  `,
  medium: css`
    font-size: 0.8rem;
    padding: 0.6rem 1.2rem;
    font-weight: 500;

    @media ${device.tablet} {
      padding: 0.8rem 1.6rem;
      font-size: 1rem;
    }
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,

  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-100);
    }
  `,

  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

export const Button = styled.button`
  border: none;
  border-radius: 2.4rem;
  box-shadow: var(--shadow-sm);
  cursor: pointer;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
