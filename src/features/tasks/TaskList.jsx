import styled from "styled-components";

import Task from "./Task";
import { device } from "../../styles/devices";

const StyledList = styled.ul`
  display: grid;
  padding: 0;

  @media ${device.tablet} {
    gap: 1rem;
  }
`;

function TaskList({ handleCheckingTask, tasks = [], type = "normal" }) {
  return (
    <StyledList>
      {tasks.map(({ text, done: checked, id }, i) => (
        <Task
          text={text}
          id={id}
          checked={checked}
          key={i}
          type={type}
          onCheck={() => handleCheckingTask({ taskId: id, done: !checked })}
        />
      ))}
    </StyledList>
  );
}

export default TaskList;
