import styled from "styled-components";

import { useHourTasks } from "./useHourTasks";
import { useSettings } from "../settings/useSettings";
import DayNote from "../notes/DayNote";
import CalendarHour from "./CalendarHour";

const CalendatHourBox = styled.div`
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--color-grey-50)" : "unset"};
  margin-top: 1rem;
  border: 1px solid var(--color-grey-200);
  border-right: ${({ $isLast }) => ($isLast ? "1px" : "none")};
  min-width: 12rem;
`;

function Day({ isActive = false, isLast = false, note, day }) {
  const { settings, isLoading } = useSettings();
  const { tasks, isLoading: isLoadingTasks } = useHourTasks({
    dateValue: day.date.toISOString().slice(0, 10),
  });

  if (isLoading || isLoadingTasks) return;

  const endHour = Number(settings.end_time_of_day);
  const startHour = Number(settings.start_time_of_day);

  return (
    <div>
      <DayNote
        text={note?.text}
        id={note?.id}
        date={note ? note.date : day.date.toISOString().slice(0, 10)}
        isActive={isActive}
        isLast={isLast}
      />

      <CalendatHourBox>
        {Array.from({ length: endHour - startHour + 1 }).map((x, i) => (
          <CalendarHour
            hour={i + startHour}
            text={
              tasks
                ?.filter(
                  (task) =>
                    task.date === day?.date.toISOString().slice(0, 10) &&
                    task.hour == i + startHour
                )
                ?.at(0)?.text
            }
            taskId={
              tasks
                ?.filter(
                  (task) =>
                    task.date === day?.date.toISOString().slice(0, 10) &&
                    task.hour == i + startHour
                )
                ?.at(0)?.id
            }
            date={day?.date.toISOString().slice(0, 10)}
            key={i}
          />
        ))}
        <br />
      </CalendatHourBox>
    </div>
  );
}

export default Day;
