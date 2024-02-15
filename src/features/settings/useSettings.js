import { useQuery } from "@tanstack/react-query";

import { useUser } from "../authentication/useUser";
import { getSettings } from "../../services/apiSettings";

export function useSettings() {
  const { user } = useUser();

  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: () => getSettings(user.id),
  });

  return { isLoading, error, settings };
}
