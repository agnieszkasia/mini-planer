import supabase from "./supabase";

export async function getSettings(userId) {
  const { data, error } = await supabase
    .from("settings")
    .select("*")
    .eq("user_id", userId)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }
  return data;
}

export async function updateSetting(newSetting, userId) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    .eq("user_id", userId)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be updated");
  }
  return data;
}
