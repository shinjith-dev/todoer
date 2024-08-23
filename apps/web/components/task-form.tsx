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

const TaskSchema = z
  .object({
    name: z.string(),
    description: z.string(),
    status: z.string(),
    completed: z.coerce.boolean(),
  })
  .required();

const defaultValues = {
  completed: false,
};

type Props = {
  edit?: TTask
  close: () => void;
};

export default function TaskForm({ edit, close }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof TaskSchema>>({
    resolver: zodResolver(TaskSchema),
    defaultValues: { ...defaultValues, name: edit?.name ?? "", description: edit?.description ?? "" },
  });

  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof TaskSchema>) => {
    console.log('onSubmit')
    const newTask = edit ? await updateTask(edit?.id ?? -1, data) : await addTask(data);

    console.log(newTask);
    close();
    router.refresh();
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
        <Button type="submit" className="w-fit">{edit ? "Save task" : "Add new task"}</Button>
      </div>
    </form>
  );
}
