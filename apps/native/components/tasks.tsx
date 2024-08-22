import tw from "@/lib/twrnc";
import { getTasks } from "@/lib/queries";
import { TTask } from "@/lib/types";
import { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import Task from "./task";

export default function Tasks() {
  const [tasks, setTasks] = useState<TTask[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const { data, error } = await getTasks();
        if (error) {
          console.error("Error fetching tasks:", error.message);
          return;
        }

        if (data && data.length > 0) {
          setTasks(data);
        }
      } catch (error: any) {
        console.error("Error fetching tasks:", error?.message);
      }
    };

    getTodos();
  }, []);

  console.log("Data::", tasks);

  return (
    <View>
      <Text style={tw`text-2xl font-semibold mb-3`}>Pending</Text>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item?.id?.toString() ?? ""}
        renderItem={({ item }) => <Task key={item.id} task={item} />}
      />
    </View>
  );
}
