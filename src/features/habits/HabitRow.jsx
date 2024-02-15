import styled from "styled-components";

import HabitDay from "./HabitDay";
import { useHabitDays } from "./useHabitDays";

const StyledTableRow = styled.tr`
  border-top: 1px solid var(--color-grey-300);
  cursor: url(pencil.png), pointer;
`;

function HabitRow({ habit, days = [], currentDate }) {
  const { habitDays, isLoading } = useHabitDays({ habitId: habit.id });

  if (isLoading) return;

  return (
    <StyledTableRow>
      {days.map((day, i) => (
        <HabitDay
          habit={habit}
          day={habitDays?.find(
            (habitDay) => habitDay.date === day.date.toISOString().slice(0, 10)
          )}
          isActive={currentDate === day.date.toISOString().slice(0, 10)}
          date={day.date.toISOString().slice(0, 10)}
          key={habit.name + i}
        />
      ))}
    </StyledTableRow>
  );
}

export default HabitRow;
