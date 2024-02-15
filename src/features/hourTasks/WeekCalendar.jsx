import styled from "styled-components";
import PropTypes from "prop-types";

import { useNotes } from "../notes/useNotes";
import { getToday, getTodayDate, getWeekNumber } from "../../utils/helpers";
import CalendarTableHeader from "../../ui/CalendarTableHeader";
import Spinner from "../../ui/Spinner";
import Day from "./Day";

const CalendarTableContent = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

function WeekCalendar({ weekNumber, year, weekDays }) {
  const currentDay = getTodayDate();
  const { notes, isLoading } = useNotes();

  if (isLoading) return <Spinner />;

  return (
    <div
      style={{
        position: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        overflow: "scroll",
        alignItems: "stretch",
      }}
    >
      <CalendarTableHeader days={weekDays} />
      <CalendarTableContent>
        {weekDays.map((day, i) => (
          <Day
            key={i}
            note={notes
              .filter(
                (note) => note.date === day.date.toISOString().slice(0, 10)
              )
              ?.at(0)}
            day={day}
            isActive={day.date.toISOString().slice(0, 10) === currentDay}
            isLast={i + 1 === weekDays.length}
          />
        ))}
      </CalendarTableContent>
    </div>
  );
}

WeekCalendar.defaultProps = {
  weekNumber: getWeekNumber(),
  year: getToday().slice(0, 4),
};

WeekCalendar.propTypes = {
  weekNumber: PropTypes.number,
  year: PropTypes.number,
};

export default WeekCalendar;
