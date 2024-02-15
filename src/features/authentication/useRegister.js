import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { register as registerApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useRegister() {
  const navigate = useNavigate();

  const { mutate: register, isLoading } = useMutation({
    mutationFn: registerApi,
    onSuccess: () => {
      toast.success(
        "Account successfully created. Please verify the new account from the user's email address"
      );

      navigate("/settings", { replace: true });
    },
    onError: (err) => toast.error(err.message),
  });

  return { register, isLoading };
}
