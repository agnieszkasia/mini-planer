import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import styled from "styled-components";

import LightIcon from "./LightIcon";
import { device } from "../styles/devices";

const StyledBox = styled.div`
  display: flex;
  gap: 0.2rem;
  justify-content: end;
  align-items: center;

  @media ${device.tablet} {
    gap: 1rem;
  }
`;

const StyledValue = styled.div`
  font-size: ${({ $fontsize }) => ($fontsize ? "0.7rem" : "1rem")};
  width: 2.4rem;
  text-align: center;

  @media ${device.tablet} {
    font-size: ${({ $fontsize }) => ($fontsize ? "1rem" : "1.4rem")};
  }
`;

function IncreaseDecreaseInput({ id, defaultValue, update, options }) {
  let valueIndex = options?.findIndex((el) => el === defaultValue);
  function handleIncrease() {
    if (options) {
      update({ [id]: options.at(valueIndex) });
    } else {
      update({ [id]: defaultValue + 1 });
    }
  }

  function handleDecrease() {
    if (options) {
      update({ [id]: options.at(valueIndex - 1) });
    } else {
      update({ [id]: defaultValue - 1 });
    }
  }
  return (
    <StyledBox>
      <LightIcon>
        <FiMinusCircle onClick={handleDecrease} />
      </LightIcon>
      <StyledValue $fontsize={defaultValue?.length > 3}>
        {defaultValue}
      </StyledValue>
      <LightIcon>
        <FiPlusCircle onClick={handleIncrease} />
      </LightIcon>
    </StyledBox>
  );
}

export default IncreaseDecreaseInput;
