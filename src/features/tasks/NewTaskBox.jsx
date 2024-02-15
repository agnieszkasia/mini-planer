import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import PropTypes from "prop-types";
import styled from "styled-components";

import ButtonIcon from "../../ui/ButtonIcon";
import Input from "../../ui/Input";

const StyledTaskBox = styled.div`
  display: flex;
  justify-items: center;
`;

function NewTaskBox({ priority, createTask, onEscape }) {
  const [taskText, setTaskText] = useState("");

  async function handleKeyDown(e) {
    if (e.key === "Enter") {
      setTaskText(e.target.value);
      createTask({ task: { text: taskText, priority: priority } });
    }

    if (e.key === "Escape") {
      onEscape();
    }
  }

  return (
    <StyledTaskBox>
      <Input
        placeholder="Dodaj zadanie"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
      />
      <ButtonIcon
        onClick={() =>
          createTask({ task: { text: taskText, priority: priority } })
        }
      >
        <IoMdAddCircle />
      </ButtonIcon>
    </StyledTaskBox>
  );
}

NewTaskBox.defaultProps = {
  priority: false,
};

NewTaskBox.propTypes = {
  priority: PropTypes.bool,
  createTask: PropTypes.func,
  onEscape: PropTypes.func,
};

export default NewTaskBox;
