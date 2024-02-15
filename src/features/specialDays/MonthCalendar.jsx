import styled from "styled-components";

import { useSpecialDays } from "./useSpecialDays";
import { getMonthDays } from "../../utils/helpers";
import MonthDay from "./MonthDay";
import Spinner from "../../ui/Spinner";
import { device } from "../../styles/devices";

const StyledCalenderTable = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: 1fr;
  height: 14rem;

  @media ${device.tablet} {
    height: 70vh;
  }
`;

const EmptyDay = styled.div`
  border-right: 1px solid var(--color-grey-200);
`;

function MonthCalendar({ month, year }) {
  const days = getMonthDays(month, year);

  const { specialDays, isLoading } = useSpecialDays({
    from: days?.at(0).date.toISOString().slice(0, 10),
    to: days
      ?.at(days?.length - 1)
      .date?.toISOString()
      .slice(0, 10),
  });

  if (isLoading || !days) return <Spinner />;

  const firstDayOfMonth =
    days.at(0).date.getDay() !== 0 ? days.at(0).date.getDay() : 7;

  return (
    <StyledCalenderTable key={month + year}>
      {Array.from({ length: firstDayOfMonth - 1 }).map((x, i) => (
        <EmptyDay key={i}></EmptyDay>
      ))}
      {days.map((day, i) => (
        <MonthDay
          specialDay={specialDays.find(
            (currDay) => currDay.date === day.date.toISOString().slice(0, 10)
          )}
          day={day}
          key={month + i}
          isLast={(firstDayOfMonth + 1 + i) % 7 === 1}
        />
      ))}
    </StyledCalenderTable>
  );
}

export default MonthCalendar;
