import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useUser } from "../authentication/useUser";
import { createUpdateSpecialDay } from "../../services/apiSpecialDays";

export function useUpdateSpecialDay() {
  const { user } = useUser();
  const queryClient = useQueryClient();

  const { mutate: editSpecialDay, isLoading: isEditing } = useMutation({
    mutationFn: ({ newSpecialDayData, id }) =>
      createUpdateSpecialDay({ ...newSpecialDayData, user_id: user.id }, id),
    onSuccess: () => {
      toast.success("Special day successfully edited.");
      queryClient.invalidateQueries({ queryKey: ["specialDay"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editSpecialDay };
}
