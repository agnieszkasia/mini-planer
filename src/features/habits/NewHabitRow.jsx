import { IoAddCircle } from "react-icons/io5";
import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useCreateHabit } from "./useCreateHabit";
import ButtonIcon from "../../ui/ButtonIcon";
import Input from "../../ui/Input";

const StyledCell = styled.td`
  display: flex;
`;

function NewHabitRow({ setAddNew }) {
  const { createHabit } = useCreateHabit();
  const [habitName, setHabitName] = useState("");

  function handleCreate() {
    if (habitName) {
      createHabit({ newData: { name: habitName } });
      setAddNew(false);
    }
  }

  function handleKeyPress(e) {
    if (e.key === "Enter" && habitName) {
      createHabit({ newData: { name: habitName } });
      setAddNew(false);
    }
    if (e.key === "Escape") {
      setAddNew(false);
    }
  }

  return (
    <tr>
      <StyledCell>
        <Input
          $autowidth
          type="text"
          style={{ width: "9.2rem" }}
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          onKeyUp={handleKeyPress}
          onBlur={() => setAddNew(false)}
          autoFocus
        />
        <ButtonIcon size="small" onClick={handleCreate}>
          <IoAddCircle />
        </ButtonIcon>
      </StyledCell>
    </tr>
  );
}

NewHabitRow.propTypes = {
  setAddNew: PropTypes.func,
};

export default NewHabitRow;
