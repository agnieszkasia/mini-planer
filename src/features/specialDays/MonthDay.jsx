import { useState } from "react";
import styled from "styled-components";

import { getToday } from "../../utils/helpers";
import { useUpdateSpecialDay } from "./useUpdateSpecialDay";
import { device } from "../../styles/devices";

const StyledDay = styled.div`
  border-top: 1px solid var(--color-grey-200);
  border-right: ${({ $last }) =>
    $last ? "none" : "1px solid var(--color-grey-200)"};
  background-color: ${({ $active }) =>
    $active ? "var(--color-grey-50)" : "unset"};
  position: relative;
`;

const DayNumber = styled.div`
  text-align: right;
  padding: 0.1rem 0.4rem;
  font-size: 1rem;
  font-weight: ${({ $active }) => ($active ? "700" : "unset")};
  position: absolute;
  right: 0;
  width: 2rem;

  @media ${device.tablet} {
    padding: 0.2rem 1rem;
    font-size: 1.2rem;
  }
`;

const TextBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Textarea = styled.textarea`
  padding: 0.4rem;
  outline: none;
  border: none;
  resize: none;
  background-color: unset;
  height: 100%;
  font-family: "Architects Daughter", cursive;
  font-size: 1rem;
  width: calc(100% - 2.4rem);
  display: none;

  @media ${device.tablet} {
    display: unset;
  }
`;

function MonthDay({ day, specialDay, isLast }) {
  const currentDay = getToday().slice(0, 10);
  const isActive = day.date.toISOString().slice(0, 10) === currentDay;
  const { editSpecialDay } = useUpdateSpecialDay();
  const [specialDayValue, setSpecialDayValue] = useState(null);

  function handleUpdateSpecialDay() {
    editSpecialDay({
      newSpecialDayData: { title: specialDayValue, date: day.date },
      id: specialDay?.id,
    });
  }

  return (
    <StyledDay $active={isActive} $last={isLast}>
      <DayNumber $active={isActive}>{day.date.getDate()}</DayNumber>
      <TextBox onBlur={handleUpdateSpecialDay}>
        <Textarea
          key={day}
          onChange={(e) => setSpecialDayValue(e.target.value)}
          value={specialDayValue ?? specialDay?.title}
          spellCheck="false"
        ></Textarea>
      </TextBox>
    </StyledDay>
  );
}

export default MonthDay;
