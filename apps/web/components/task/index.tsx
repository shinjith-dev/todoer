'use client'
import { TTask } from "@/lib/types";
import { Button } from "../ui/button";
import StatusSelect from "./status-select";
import { updateStatus } from "@/lib/queries";
import { useState } from "react";

type Props = {
  task: TTask
}

export default function Task({ task: prevTaskValue }: Props) {
  const [task, setTask] = useState<TTask>(prevTaskValue)

  const update = async (status: string) => {
    const newTask = await updateStatus(task.id, status)
    if (newTask)
      setTask(newTask[0])
  }

  return (
    <div className="rounded border p-4 hover:bg-surface cursor-pointer flex gap-3 items-start justify-between">
      <div className="space-y-2">
        <h4 className="text-2xl font-medium">{task.name}</h4>
        <p className="text-sm">{task.description}</p>
      </div>

      <div className="space-y-2">
        <StatusSelect status={task.status} updateStatus={update} />
        <Button disabled={task.status === 'completed'} onClick={() => update('completed')}>Mark as Completed</Button>
      </div>
    </div>
  )
}
