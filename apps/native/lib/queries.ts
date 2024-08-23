import axios from "./axios";
import { TTask } from "./types";

export const getTasks = async () => {
  try {
    const res = await axios.get("/task");

    if (res?.data) return res.data as TTask[];
  } catch (err) {
    console.log(err);
  }

  return [];
};

export const updateStatus = async (id: number, status: string) => {
  try {
    const res = await axios.put(`/task/${id}`, {
      status,
      completed: status === "completed",
    });

    if (res?.data) return res.data;
  } catch (err) {
    console.log(err);
  }

  return null;
};

export const addTask = async (task: any) => {
  try {
    const res = await axios.post("/task", task);

    if (res?.data) return res.data;
  } catch (err) {
    console.log(err);
  }

  return null;
};

export const updateTask = async (id: number, task: any) => {
  try {
    const res = await axios.put(`/task/${id}`, task);

    if (res?.data) return res.data;
  } catch (err) {
    console.log(err);
  }

  return null;
};

export const removeTask = async (id: number) => {
  try {
    await axios.delete(`/task/${id}`);

    return true;
  } catch (err) {
    console.log(err);
  }

  return false;
};
