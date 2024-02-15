import styled from "styled-components";
import { device } from "../styles/devices";

const StyledInput = styled.input`
  position: relative;
  appearance: none;
  outline: none;
  width: 40px;
  height: 20px;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-300);
  border-radius: 50px;
  box-shadow: inset -20px 0 0 0 var(--color-grey-300);
  transition-duration: 200ms;

  &:after {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border-radius: 50%;
  }

  &:checked {
    border-color: var(--color-brand-600);
    box-shadow: inset 20px 0 0 0 var(--color-brand-600);
  }

  &:checked:after {
    left: 20px;
    box-shadow: -2px 0 3px rgba(0, 0, 0, 0.05);
  }

  @media ${device.tablet} {
    width: 50px;
    height: 30px;
    border-radius: 50px;
    box-shadow: inset -20px 0 0 0 var(--color-grey-300);

    &:after {
      width: 26px;
      height: 26px;
    }

    &:checked {
      box-shadow: inset 20px 0 0 0 var(--color-brand-600);
    }

    &:checked:after {
      left: 20px;
    }
  }
`;

function CheckboxSwitch({ defaultValue, update, id }) {
  function handleCheck() {
    update({ [id]: !defaultValue });
    console.log(!defaultValue);
  }

  return (
    <StyledInput
      type="checkbox"
      value={defaultValue}
      checked={defaultValue}
      onChange={handleCheck}
    />
  );
}

export default CheckboxSwitch;
