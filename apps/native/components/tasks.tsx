import tw from "@/lib/twrnc";
import { TTask } from "@/lib/types";
import { View, Text, FlatList } from "react-native";
import Task from "./task";

type Props = {
  status: "Pending" | "Ongoing" | "Completed";
  tasks: TTask[];
  refresh: () => void;
};

export default function Tasks({ status, tasks, refresh }: Props) {
  if (tasks.filter((t) => t.status === status.toLowerCase()).length === 0)
    return null;

  return (
    <View>
      <Text style={tw`text-xl text-fg font-semibold mb-1`}>{status}</Text>

      <FlatList
        data={tasks.filter((t) => t.status === status.toLowerCase())}
        keyExtractor={(item) => item?.id?.toString() ?? ""}
        renderItem={({ item }) => (
          <Task key={item.id} task={item} refresh={refresh} />
        )}
      />
    </View>
  );
}
