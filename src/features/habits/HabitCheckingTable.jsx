import styled from "styled-components";
import HabitRow from "./HabitRow";

const ContentTable = styled.table`
  table-layout: fixed;
  width: 100%;
  min-width: 60rem;
  border-collapse: collapse;
`;

const DayNumber = styled.th`
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--color-grey-100)" : "none"};
`;

function HabitCheckingTable({ days, currentDate, month, habits }) {
  return (
    <ContentTable>
      <tbody>
        <tr>
          {days.map((day, i) => (
            <DayNumber
              key={String(month) + i}
              $isActive={currentDate === day.date.toISOString().slice(0, 10)}
            >
              {Number(day.date.toISOString().slice(8, 10))}
            </DayNumber>
          ))}
        </tr>
        {habits.map((habit) => (
          <HabitRow
            currentDate={currentDate}
            habit={habit}
            key={habit.id + days.length}
            days={days}
          />
        ))}
      </tbody>
    </ContentTable>
  );
}

export default HabitCheckingTable;
