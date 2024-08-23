"use client";
import { useEffect, useState } from "react";
import Task from "./task";
import { getTasks } from "@/lib/queries";
import { TTask } from "@/lib/types";

export default function Tasks({ status }: { status: string }) {
  const [tasks, setTasks] = useState<TTask[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks();

        if (data && data.length > 0) setTasks(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTasks();
  }, []);

  if (!tasks) return null;

  if (tasks.filter((t) => t.status === status.toLowerCase()).length === 0)
    return null;

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-3">{status}</h3>

      <ul className="space-y-3">
        {tasks &&
          tasks
            .filter((t) => t.status === status.toLowerCase())
            .map((t) => (
              <li key={t.id}>
                <Task task={t} />
              </li>
            ))}
      </ul>
    </div>
  );
}
