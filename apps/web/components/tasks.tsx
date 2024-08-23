import { cookies } from "next/headers";
import Task from "./task";
import { getTasks } from "@/lib/queries";

export default async function Tasks({ status }: { status: string }) {
  const cookieStore = cookies();
  const tasks = await getTasks(cookieStore);


  if (!tasks) return null

  if (tasks.filter(t => t.status === status.toLowerCase()).length === 0) return null

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-3">{status}</h3>

      <ul className="space-y-3">
        {tasks &&
          tasks.filter(t => t.status === status.toLowerCase()).map((t) => (
            <li key={t.id}>
              <Task task={t} />
            </li>
          ))}
      </ul>
    </div>
  );
}
