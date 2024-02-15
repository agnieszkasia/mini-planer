import { useState } from "react";
import { useForm } from "react-hook-form";

import { useUpdateUser } from "./useUpdateUser";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function UpdatePasswordForm() {
  const [edit, setEdit] = useState(false);
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  function handleCancel() {
    reset();
    setEdit(false);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Hasło" error={errors?.password?.message} optionVertical>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("password", {
            required: "Hasło jest wymagane",
            minLength: {
              value: 8,
              message: "Hasło musi zawierać przynajmniej 8 znaków",
            },
          })}
          onChange={() => setEdit(true)}
        />
      </FormRow>

      {edit && (
        <>
          <FormRow
            label="Powtórz hasło"
            error={errors?.passwordConfirm?.message}
            optionVertical
          >
            <Input
              type="password"
              autoComplete="new-password"
              id="passwordConfirm"
              disabled={isUpdating}
              {...register("passwordConfirm", {
                required: "Powtórzenie hasła jest wymagane",
                validate: (value) =>
                  getValues().password === value ||
                  "Podane hasła nie są takie same",
              })}
            />
          </FormRow>
          <FormRow>
            <Button onClick={handleCancel} type="reset" variation="secondary">
              ANULUJ
            </Button>
            <Button disabled={isUpdating}>AKTUALIZUJ HASŁO</Button>
          </FormRow>
        </>
      )}
    </Form>
  );
}

export default UpdatePasswordForm;
