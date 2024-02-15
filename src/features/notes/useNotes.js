import { useQuery } from "@tanstack/react-query";
import { getFirstDayOfWeek, getLastDayOfWeek } from "../../utils/helpers";
import { getNotes } from "../../services/apiNotes";
import { useUser } from "../authentication/useUser";

export function useNotes() {
  const { user } = useUser();
  const from = getFirstDayOfWeek(new Date());
  const to = getLastDayOfWeek(new Date());

  const {
    isLoading,
    data: notes,
    error,
  } = useQuery({
    queryKey: ["notes"],
    queryFn: () => getNotes({ from, to }, user.id),
  });

  return { isLoading, error, notes };
}
