"use client";
import Input from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { addTask } from "@/lib/queries";
import { useRouter } from "next/navigation";

const TaskSchema = z
  .object({
    name: z.string(),
    description: z.string(),
    status: z.string(),
    completed: z.coerce.boolean(),
  })
  .required();

const defaultValues = {
  status: "pending",
  completed: false,
};

type Props = {
  close: () => void;
};

export default function TaskForm({ close }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof TaskSchema>>({
    resolver: zodResolver(TaskSchema),
    defaultValues,
  });

  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof TaskSchema>) => {
    const newTask = await addTask(data);

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
        <Button className="w-fit">Add new task</Button>
      </div>
    </form>
  );
}
