import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TTask } from "@/lib/types";
import { ReactNode } from "react";
import StatusSelect from "./status-select";

type Props = {
  children: ReactNode;
  task: TTask;
  remove: () => void;
  updateStatus: (status: string) => void;
};

export function PopupWrapper({ children, task, remove, updateStatus }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-3xl mb-2">{task.name}</DialogTitle>

          <DialogDescription className="text-base text-subtle">
            {task.description}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex gap-1">
          <StatusSelect status={task.status} updateStatus={updateStatus} />
          <Button
            className="bg-destructive hover:bg-destructive/75 text-destructive-fg"
            onClick={remove}
          >
            Delete
          </Button>
          <Button
            disabled={task.status === "completed"}
            onClick={() => updateStatus("completed")}
          >
            Mark as Completed
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
