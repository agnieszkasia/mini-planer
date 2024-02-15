import { useQuery } from "@tanstack/react-query";

import { useUser } from "../authentication/useUser";
import { getSpecialDays } from "../../services/apiSpecialDays";

export function useSpecialDays({ from, to }) {
  const { user } = useUser();
  const {
    isLoading,
    data: specialDays,
    error,
  } = useQuery({
    queryKey: ["specialDays"],
    queryFn: () => getSpecialDays({ from, to }, user.id),
  });

  return { isLoading, error, specialDays };
}
