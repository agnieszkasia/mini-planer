import supabase from "./supabase";

export async function getHourTasks({ date }, userId) {
  const { data, error } = await supabase
    .from("hour_tasks")
    .select("*")
    .eq("date", date)
    .eq("user_id", userId)
    .order("id");

  if (error) {
    console.error(error);
    throw new Error("Tasks could not be loaded");
  }

  return data;
}

export async function updateHourTask(id, obj) {
  const { data, error } = await supabase
    .from("tasks")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Task could not be updated");
  }
  return data;
}

export async function deleteHourTask(id) {
  const { error } = await supabase.from("tasks").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Task could not be updated");
  }
}

export async function createUpdateHourTask(newTask, id) {
  let query = supabase.from("hour_tasks");
  if (!id) query = query.insert([newTask]);
  if (id) query = query.update(newTask).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Task could not be created");
  }

  return data;
}
