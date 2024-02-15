import supabase from "./supabase";

export async function getHabitDays({ habitId }) {
  const { data, error } = await supabase
    .from("habit_days")
    .select("*")
    .eq("habit_id", habitId);

  if (error) {
    console.error(error);
    throw new Error("Habit days could not get loaded");
  }

  return data;
}

export async function createHabitDay(newData) {
  const { data, error } = await supabase
    .from("habit_days")
    .insert([{ ...newData }])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Habit day could not be created");
  }

  return data;
}

export async function deleteHabitDay(id) {
  const { error } = await supabase.from("habit_days").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Habit day could not be deleted");
  }
}
