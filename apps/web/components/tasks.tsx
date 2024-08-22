import { cookies } from "next/headers";
import Task from "./task";
import { getTasks } from "@/lib/queries";

export default async function Tasks() {
  const cookieStore = cookies();
  const tasks = await getTasks(cookieStore);

  return (
    <div>
      <h3 className="text-2xl font-medium mb-3">Pending</h3>

      <ul className="space-y-3">
        {tasks &&
          tasks.map((t) => (
            <li key={t.id}>
              <Task task={t} />
            </li>
          ))}
      </ul>
    </div>
  );
}
