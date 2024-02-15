import styled from "styled-components";
import { device } from "../styles/devices";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: ${({ $optionVertical }) =>
    $optionVertical ? "1fr" : "12rem 1fr"};
  padding: 0.8rem 0;
  width: 100%;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }

  @media ${device.tablet} {
    grid-template-columns: 20rem 1fr;
  }
`;

const Label = styled.label`
  font-weight: 400;
  text-transform: uppercase;
  color: var(--color-grey-400);
  font-size: 0.7rem;

  @media ${device.tablet} {
    font-size: unset;
  }
`;

const Error = styled.span`
  font-size: 0.8rem;
  color: var(--color-red-700);

  @media ${device.tablet} {
    font-size: 1.4rem;
  }
`;

function FormRow({ label, error, children, optionVertical }) {
  return (
    <StyledFormRow $optionVertical={optionVertical}>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

FormRow.defaultProps = {
  smallLabel: true,
};

export default FormRow;
