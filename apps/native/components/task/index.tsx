import { TTask } from "@/lib/types";
import StatusSelect from "./status-select";
import { removeTask, updateStatus } from "@/lib/queries";
import { useState } from "react";
import { IconCheck, IconPencil, IconTrash } from "@tabler/icons-react-native";
import { useRouter } from "expo-router";
import { PopupWrapper } from "./pop-up";
import tw from "@/lib/twrnc";
import { View, Text } from "react-native";

type Props = {
  task: TTask;
};

export default function Task({ task: prevTaskValue }: Props) {
  const [task, setTask] = useState<TTask>(prevTaskValue);
  const router = useRouter();

  const update = async (status: string) => {
    const newTask = await updateStatus(task?.id ?? -1, status);
    if (newTask) setTask(newTask[0]);
  };

  const remove = async () => {
    const isRemoved = await removeTask(task?.id ?? -1);
    // reload logic
  };

  return (
    <View
      style={tw`rounded border p-4 my-2 flex gap-8 items-start justify-between`}
    >
      <View>
        <Text style={tw`text-2xl mb-2 font-medium`}>{task.name}</Text>
        <Text style={tw`text-sm text-subtle`}>{task.description}</Text>
      </View>

      {/* <View className="space-y-3" onClick={(e) => e.stopPropagation()}> */}
      {/*   <StatusSelect status={task.status} updateStatus={update} /> */}

      {/*   <View className="flex gap-2"> */}
      {/*     <Button */}
      {/*       title="Remove task" */}
      {/*       variant="icon" */}
      {/*       size="icon" */}
      {/*       className="bg-destructive/75 hover:bg-destructive/50" */}
      {/*       onClick={remove} */}
      {/*     > */}
      {/*       <IconTrash size={18} className="text-destructive-fg" /> */}
      {/*     </Button> */}
      {/*     <Button */}
      {/*       title="Edit task" */}
      {/*       variant="icon" */}
      {/*       size="icon" */}
      {/*       className="bg-overlay/75 hover:bg-overlay/50" */}
      {/*     > */}
      {/*       <IconPencil size={18} className="text-secondary" /> */}
      {/*     </Button> */}
      {/*     <Button */}
      {/*       title="Mark task as completed" */}
      {/*       variant="icon" */}
      {/*       size="icon" */}
      {/*       className="bg-overlay/75 hover:bg-overlay/50" */}
      {/*       disabled={task.status === "completed"} */}
      {/*       onClick={() => update("completed")} */}
      {/*     > */}
      {/*       <IconCheck size={18} className="text-primary" /> */}
      {/*     </Button> */}
      {/*   </View> */}
      {/* </View> */}
    </View>
  );
}
