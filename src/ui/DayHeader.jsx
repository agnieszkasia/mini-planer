import styled from "styled-components";
import { device } from "../styles/devices";

const StyledDayHeader = styled.div`
  min-width: ${({ $number }) => ($number ? "10.8rem" : "unset")};
  overflow: ${({ $number }) => ($number ? "none" : "hidden")};
  padding: 0 0.8rem 0 0.4rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  justify-content: space-between;
  display: flex;
  align-items: end;
  border-bottom: 2px solid var(--color-grey-900);
  border-right: 1px solid var(--color-grey-200);
  background-color: ${(props) =>
    props.$active ? "var(--color-grey-50)" : "var(--color-grey-0)"};

  font-weight: ${(props) => (props.$active ? "700" : "unset")};

  &:last-child {
    border-right: none;
  }
`;

const StyledDayNumber = styled.div`
  font-size: 1.8rem;
  font-weight: ${(props) => (props.$active ? "500" : "400")};
  line-height: 1.8rem;

  @media ${device.tablet} {
    font-size: 2rem;
    line-height: 2.2rem;
  }
`;

function DayHeader({ number = null, name, isActive }) {
  return (
    <StyledDayHeader $active={isActive} $number={number}>
      <div>{name}</div>
      <StyledDayNumber $active={isActive}>{number}</StyledDayNumber>
    </StyledDayHeader>
  );
}

export default DayHeader;
