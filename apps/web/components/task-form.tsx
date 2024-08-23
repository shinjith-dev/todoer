"use client";
import Input from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { addTask, updateTask } from "@/lib/queries";
import { useRouter } from "next/navigation";
import { TTask } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";

const TaskSchema = z
  .object({
    name: z.string(),
    description: z.string(),
  })
  .required();

const defaultValues = {
  status: "pending",
  completed: false,
};

type Props = {
  edit?: TTask;
  close: () => void;
};

export default function TaskForm({ edit, close }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof TaskSchema>>({
    resolver: zodResolver(TaskSchema),
    defaultValues: {
      ...defaultValues,
      name: edit?.name ?? "",
      description: edit?.description ?? "",
    },
  });
  const { toast } = useToast();

  const onSubmit = async (data: z.infer<typeof TaskSchema>) => {
    console.log("onSubmit");
    const task = { ...defaultValues, ...data };

    let newTask = null;
    if (edit) newTask = await updateTask(edit?.id ?? -1, task);
    else newTask = await addTask(task);

    if (newTask) {
      toast({
        title: edit ? "Task saved" : "Task added",
        description: `Task "${newTask.name}" is ${edit ? "updated" : "added"}`,
      });

      console.log(newTask);
    }

    close();
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full w-full flex-col gap-2 py-3"
    >
      <Input
        type="text"
        label="Name"
        description={
          <p className="text-red-800 dark:text-red-200">
            {errors.name?.message}
          </p>
        }
        {...register("name")}
      />

      <Textarea
        label="Description"
        description={
          <p className="text-red-800 dark:text-red-200">
            {errors.description?.message}
          </p>
        }
        {...register("description")}
      />

      <div className="flex justify-end">
        <Button
          onClick={handleSubmit(onSubmit)}
          type="submit"
          className="w-fit"
        >
          {edit ? "Save task" : "Add new task"}
        </Button>
      </div>
    </form>
  );
}
