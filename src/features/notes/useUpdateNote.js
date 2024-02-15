import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useUser } from "../authentication/useUser";
import { createUpdateNote } from "../../services/apiNotes";

export function useUpdateNote() {
  const { user } = useUser();
  const queryClient = useQueryClient();

  const { mutate: updateNote, isLoading: isEditing } = useMutation({
    mutationFn: ({ newNoteData, id }) =>
      createUpdateNote({ ...newNoteData, user_id: user.id }, id),
    onSuccess: () => {
      toast.success("Note successfully edited.");
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, updateNote };
}
