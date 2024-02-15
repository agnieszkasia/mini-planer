import { useState } from "react";
import Button from "../../ui/Button";
import { useUser } from "../authentication/useUser";
import { useUpdateUser } from "../authentication/useUpdateUser";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import UpdateAvatar from "./UpdateAvatar";

function UpdateProfile() {
  const [changed, setChanged] = useState(false);

  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();
  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
          setChanged(false);
        },
      }
    );
  }

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
    setChanged(false);
  }

  function handleChangeAvatar(avatarData) {
    setAvatar(avatarData);
    setChanged(true);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <UpdateAvatar setAvatar={handleChangeAvatar} avatar={avatar} />
      <FormRow label="Email" optionVertical>
        <Input value={email} disabled />
      </FormRow>
      <FormRow label="Imię i nazwisko" optionVertical>
        <Input
          type="text"
          value={fullName}
          disabled={isUpdating}
          onChange={(e) => {
            setChanged(true);
            return setFullName(e.target.value);
          }}
          id="fullName"
        />
      </FormRow>
      {changed && (
        <FormRow>
          <Button
            type="reset"
            variation="secondary"
            disabled={isUpdating}
            onClick={handleCancel}
          >
            ANULUJ
          </Button>
          <Button text="Zapisz" type="submit">
            ZAPISZ
          </Button>
        </FormRow>
      )}
    </Form>
  );
}

export default UpdateProfile;
