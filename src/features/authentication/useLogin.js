import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { login as loginApi } from "../../services/apiAuth";

export function useLogin() {
  const queryCLient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryCLient.setQueryData(["user"], user.user);

      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.error(err.message);
      toast.error("Podany email lub hasło jest nieprawidłowe");
    },
  });

  return { login, isLoading };
}
