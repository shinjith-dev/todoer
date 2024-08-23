"use client";
import { TTask } from "@/lib/types";
import { Button } from "../ui/button";
import StatusSelect from "./status-select";
import { removeTask, updateStatus } from "@/lib/queries";
import { useState } from "react";
import { IconCheck, IconTrash } from "@tabler/icons-react";
import { PopupWrapper } from "./pop-up";
import { EditTask } from "../edit-task";
import { useToast } from "@/hooks/use-toast";

type Props = {
  task: TTask;
};

export default function Task({ task: prevTaskValue }: Props) {
  const [task, setTask] = useState<TTask>(prevTaskValue);
  const { toast } = useToast();

  const update = async (status: string) => {
    const newTask = await updateStatus(task?.id ?? -1, status);
    if (newTask) {
      setTask(newTask);
      toast({
        title: "Task status updated",
        description: `Status of task "${newTask.name}" is updated to ${newTask.status}`,
      });
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  };

  const remove = async () => {
    const isRemoved = await removeTask(task?.id ?? -1);
    if (isRemoved) {
      toast({
        title: "Task deleted",
        description: `Task "${task.name}" is deleted`,
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  return (
    <PopupWrapper task={task} remove={remove} updateStatus={update}>
      <div className="rounded border p-4 hover:bg-surface cursor-pointer flex gap-8 items-start justify-between">
        <div className="space-y-2">
          <h4 className="text-2xl font-medium">{task.name}</h4>
          <p className="text-sm text-subtle">{task.description}</p>
        </div>

        <div className="space-y-3" onClick={(e) => e.stopPropagation()}>
          <StatusSelect status={task.status} updateStatus={update} />

          <div className="flex gap-2">
            <Button
              title="Remove task"
              variant="icon"
              size="icon"
              className="bg-destructive/75 hover:bg-destructive/50"
              onClick={remove}
            >
              <IconTrash size={18} className="text-destructive-fg" />
            </Button>
            <EditTask task={task} />
            <Button
              title="Mark task as completed"
              variant="icon"
              size="icon"
              className="bg-overlay/75 hover:bg-overlay/50"
              disabled={task.status === "completed"}
              onClick={() => update("completed")}
            >
              <IconCheck size={18} className="text-primary" />
            </Button>
          </div>
        </div>
      </div>
    </PopupWrapper>
  );
}
