import { useState } from "react";
import { useUpdateNote } from "./useUpdateNote";
import styled from "styled-components";

const DayNoteBox = styled.div`
  border-right: ${({ $isLast }) =>
    !$isLast ? "1px solid var(--color-grey-200)" : "none"};
  height: ${({ type }) => (type === "small" ? "unset" : "20vh")};
  font-size: 0.8rem;
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--color-grey-50)" : "unset"};
  padding: 0.4rem;
`;

const Note = styled.textarea`
  height: 100%;
  width: 100%;
  border: none;
  resize: none;
  background-color: unset;
  outline: none;
  font-family: Architects Daughter, cursive;
  font-size: 1rem;
`;

function DayNote({
  text,
  id,
  date,
  isActive = false,
  isLast = false,
  type = "normal",
}) {
  const { updateNote } = useUpdateNote();
  const [note, setNote] = useState(text ?? "");

  function handleUpdateNote() {
    if (note) {
      return updateNote({ newNoteData: { text: note, date: date }, id: id });
    }
  }

  return (
    <DayNoteBox $isLast={isLast} $isActive={isActive} type={type}>
      <Note
        value={note}
        onChange={(e) => setNote(e.target.value)}
        onBlur={handleUpdateNote}
        spellCheck="false"
      ></Note>
    </DayNoteBox>
  );
}

export default DayNote;
