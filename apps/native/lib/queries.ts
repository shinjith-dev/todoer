import { supabase } from "./supabase";
import { TTask } from "./types";

export const getTasks = async () => await supabase.from("tasks").select();

export const updateStatus = async (id: number, status: string) => {
  try {
    const { error, data } = await supabase
      .from("tasks")
      .update({ status, completed: status === "completed" })
      .eq("id", id)
      .select();

    if (error) {
      return null;
    }

    return data;
  } catch (err) {
    console.log(err);
  }

  return null;
};

export const addTask = async (task: TTask) => {
  try {
    const { error, data } = await supabase.from("tasks").insert(task).select();

    if (error) {
      return null;
    }

    return data;
  } catch (err) {
    console.log(err);
  }

  return null;
};

export const removeTask = async (id: number) => {
  try {
    const { error } = await supabase.from("tasks").delete().eq("id", id);

    if (error) {
      return false;
    }

    return true;
  } catch (err) {
    console.log(err);
  }

  return false;
};
