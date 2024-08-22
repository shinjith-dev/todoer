import { createClient } from "./supabase/server";
import { createClient as createCClient } from "./supabase/client";

export const getTasks = async (cookieStore: any) => {
  const supabase = createClient(cookieStore);

  try {
    const { data, error } = await supabase.from("tasks").select();

    if (error) {
      return [];
    }

    return data;
  } catch (err) {
    console.log(err);
  }

  return [];
};

export const updateStatus = async (id: number, status: string) => {
  const supabase = createCClient();

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
