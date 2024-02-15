import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import styled from "styled-components";

import ButtonIcon from "./ButtonIcon";
import Button from "./Button";
import LightIcon from "./LightIcon";

const StyledNavigation = styled.div`
  gap: 0.4rem;
  display: flex;
  color: var(--color-grey-300);
`;

function CalendarNavigation({ getPrevoius, getToday, getNext }) {
  return (
    <StyledNavigation>
      <LightIcon as={ButtonIcon} size="small" onClick={getPrevoius}>
        <BsFillArrowLeftCircleFill />
      </LightIcon>
      <Button size="small" variation="secondary" onClick={getToday}>
        DZIŚ
      </Button>
      <LightIcon as={ButtonIcon} size="small" onClick={getNext}>
        <BsFillArrowRightCircleFill />
      </LightIcon>
    </StyledNavigation>
  );
}

export default CalendarNavigation;
