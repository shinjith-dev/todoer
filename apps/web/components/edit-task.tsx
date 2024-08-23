"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IconPencil } from "@tabler/icons-react";
import TaskForm from "./task-form";
import { useState } from "react";
import { TTask } from "@/lib/types";

export function EditTask({ task }: { task: TTask }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          title="Edit task"
          variant="icon"
          size="icon"
          className="bg-overlay/75 hover:bg-overlay/50"
        >
          <IconPencil size={18} className="text-secondary" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit task</DialogTitle>

          <TaskForm close={() => setOpen(false)} edit={task} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
