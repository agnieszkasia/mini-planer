import styled from "styled-components";

const StyledTextArea = styled.textarea`
  outline: none;
  width: 100%;
  line-height: 2.8rem;
  border: none;
  resize: none;
  background-color: unset;
  font-size: 1rem;
  overflow: hidden;
  font-family: "Architects Daughter", cursive;
  z-index: -2;
`;

function Textarea({ onKeyPress, update, text }) {
  function handleKeyPress(e) {
    onKeyPress(e);
  }

  function handleUpdate() {
    update();
  }
  return (
    <StyledTextArea
      rows="2"
      maxLength="50"
      defaultValue={text}
      onKeyDown={handleKeyPress}
      onKeyUp={handleKeyPress}
      onBlur={handleUpdate}
      spellCheck="false"
    />
  );
}

export default Textarea;
