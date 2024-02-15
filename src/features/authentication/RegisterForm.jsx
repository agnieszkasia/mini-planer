import { useForm } from "react-hook-form";

import { useRegister } from "./useRegister";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import styled from "styled-components";

function RegisterForm() {
  const { register: registerUser, isLoading } = useRegister();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  async function onSubmit({ fullName, email, password }) {
    registerUser({ fullName, email, password }, { onSettled: reset });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical
        label="Imie i nazwisko"
        error={errors?.fullName?.message}
      >
        <Input
          type="text"
          disabled={isLoading}
          id="fullName"
          {...register("fullName", {
            required: "Imię i nazwisko jest wymagane",
          })}
        />
      </FormRowVertical>
      <FormRowVertical label="Email" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "Email jest wymagany",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Podany adress email jest nieprawidłowy",
            },
          })}
        />
      </FormRowVertical>
      <FormRowVertical label="Hasło" error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "Hasło jest wymagane",
            minLength: {
              value: 8,
              message: "Hasło musi zawierać przynajmniej 8 znaków",
            },
          })}
        />
      </FormRowVertical>

      <FormRowVertical
        label="Powtórz hasło"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          disabled={isLoading}
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "Powtórzenie hasła jest wymagane",
            validate: (value) =>
              value === getValues().password ||
              "Podane hasła nie są takie same",
          })}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button disabled={isLoading}>ZAREJESTRUJ</Button>
      </FormRowVertical>
    </Form>
  );
}

export default RegisterForm;
