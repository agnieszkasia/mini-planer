import { IoClose } from "react-icons/io5";
import styled from "styled-components";

import ButtonIcon from "../../ui/ButtonIcon";
import { useDeleteTask } from "./useDeleteTask";
import { device } from "../../styles/devices";

const TaskRow = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const TaskName = styled.div`
  background-image: ${({ $checked }) => ($checked ? "url(checked.png)" : "")};
  background-repeat: no-repeat;
  background-size: 100% 70%;
  background-position: center;

  width: fit-content;
  font-size: 1rem;
  font-variant: small-caps;
  font-weight: 500;
  cursor: url("pencil.png"), pointer;
  padding-right: 0.8rem;

  @media ${device.tablet} {
    font-size: 1.2rem;
    padding: 0 1rem;
  }
`;

const RemoveButton = styled.button`
  color: var(--color-grey-200);
`;

function Task({ text, id, onCheck, checked = false, type = "normal" }) {
  const { deleteTask } = useDeleteTask();

  return (
    <TaskRow>
      <TaskName $checked={checked} onMouseUp={onCheck}>
        {text}
      </TaskName>
      <RemoveButton as={ButtonIcon} size="small" onClick={() => deleteTask(id)}>
        <IoClose />
      </RemoveButton>
    </TaskRow>
  );
}

export default Task;
