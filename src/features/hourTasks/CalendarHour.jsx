import { useState } from "react";

import { useUpdateHourTask } from "./useUpdateHourTask";
import Textarea from "../../ui/Textarea";
import styled from "styled-components";

const CalendarHourBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  font-family: Cedarville Cursive;
  font-weight: 400;
  z-index: 1;
`;

const Line = styled.div`
  border-bottom: 1px solid var(--color-grey-200);
  margin: 0.8rem;
  color: var(--color-grey-400);
  font-size: 0.8rem;
`;

const TaskBox = styled.div`
  position: absolute;
  margin: 0 1.4rem;
  left: 0;
  right: 0;
`;

function CalendarHour({ hour, text, taskId, date }) {
  const [taskText, setTaskText] = useState(text);
  const { editTask } = useUpdateHourTask();

  function handleUpdateNote() {
    if (!taskId && !taskText) return;

    return editTask({
      newTaskData: { text: taskText, date: date, hour: hour },
      id: taskId,
    });
  }

  async function handleChange(e) {
    const el = e.target;
    if (e.key === "Enter") {
      e.preventDefault();
      el.blur();
    } else {
      setTaskText(e.target.value);
    }
  }

  return (
    <CalendarHourBox>
      <Line>{hour}</Line>
      <Line>
        <br />
      </Line>

      <TaskBox>
        <Textarea
          text={taskText}
          onKeyPress={handleChange}
          update={handleUpdateNote}
        />
      </TaskBox>
    </CalendarHourBox>
  );
}

export default CalendarHour;
