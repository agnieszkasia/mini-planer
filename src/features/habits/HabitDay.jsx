import styled from "styled-components";

import { useCreateHabitDay } from "./useCreateHabitDay";
import { useDeleteHabitDay } from "./useDeleteHabitDay";
import HabitChecked from "./HabitChecked";

const StyledTableColumn = styled.td`
  align-items: center;
  text-align: center;
  height: 3.2rem;
  background-color: ${(props) =>
    props.$isActive ? "var(--color-grey-100)" : ""};
`;

function HabitDay({ habit, day, date, isActive }) {
  const { createHabitDay } = useCreateHabitDay({ id: habit.id });
  const { deleteHabitDay } = useDeleteHabitDay({ id: habit.id });

  function handleUpdate() {
    if (!day) {
      createHabitDay({ newData: { habit_id: habit.id, date: date } });
    } else {
      deleteHabitDay(day.id);
    }
  }

  return (
    <StyledTableColumn $isActive={isActive} onClick={handleUpdate}>
      {day && <HabitChecked />}
      {!day && <br />}
    </StyledTableColumn>
  );
}

export default HabitDay;
