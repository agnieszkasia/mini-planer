import { useRef, useState } from "react";
import styled from "styled-components";

import Avatar from "../../ui/Avatar";
import Input from "../../ui/Input";
import AvatarButtons from "./AvatarButtons";

const AvatarBox = styled.div`
  position: relative;
  width: 50%;
  margin-bottom: 2rem;
  border-radius: 500px;
`;

function UpdateAvatar({ setAvatar, avatar }) {
  const [avatarImg, setAvatarImg] = useState(avatar);
  const [showButtons, setShowButtons] = useState(false);
  const avatarRef = useRef();

  function handleUpdateAvatar() {
    avatarRef.current.click();
  }

  function handleDeleteAvatar() {}

  async function handleChangeAvatar(e) {
    const newAvatar = e.target.files[0];
    const url = URL.createObjectURL(newAvatar);
    setAvatarImg(url);
    setAvatar(newAvatar);
  }

  return (
    <>
      <AvatarBox
        onMouseOver={() => setShowButtons(true)}
        onMouseOut={() => setShowButtons(false)}
      >
        <Avatar size="large" avatar={avatarImg} />
        {showButtons && (
          <AvatarButtons
            onClickEdit={handleUpdateAvatar}
            onClickDelete={handleDeleteAvatar}
          />
        )}
      </AvatarBox>

      <Input
        hidden
        ref={avatarRef}
        type="file"
        id="avatar"
        accept="image/*"
        onChange={handleChangeAvatar}
      />
    </>
  );
}

export default UpdateAvatar;
