import { useQuery } from "@tanstack/react-query";
import { getHabits } from "../../services/apiHabits";
import { useUser } from "../authentication/useUser";

export function useHabits() {
  const { user } = useUser();

  const {
    isLoading,
    data: habits,
    error,
  } = useQuery({
    queryKey: ["habits"],
    queryFn: () => getHabits(user.id),
  });

  return { isLoading, error, habits };
}
