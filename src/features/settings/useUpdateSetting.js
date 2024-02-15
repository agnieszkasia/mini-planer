import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useUser } from "../authentication/useUser";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdateSetting() {
  const { user } = useUser();
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: (setting) => updateSettingApi(setting, user.id),
    onSuccess: () => {
      toast.success("Ustawienia zostały zaktualizowane");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateSetting };
}
