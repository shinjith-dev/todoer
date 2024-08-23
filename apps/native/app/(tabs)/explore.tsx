import { SafeAreaView } from "react-native-safe-area-context";
import tw from "@/lib/twrnc";
import Tasks from "@/components/tasks";
import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import { getTasks } from "@/lib/queries";
import { TTask } from "@/lib/types";
import { useFocusEffect } from "expo-router";

export default function TabTwoScreen() {
  const [tasks, setTasks] = useState<TTask[]>([]);
  const [forceUpdate, refresh] = useState(false);

  useEffect(() => {
    getTasks()
      .then((data) => {
        if (data && data.length > 0) setTasks(data);
      })
      .catch((err) => {
        console.error("Failed fetch tasks", err);
      });
  }, [forceUpdate]);

  useFocusEffect(() => {
    getTasks()
      .then((data) => {
        if (data && data.length > 0) setTasks(data);
      })
      .catch((err) => {
        console.error("Failed fetch tasks", err);
      });
  })

  return (
    <SafeAreaView style={tw`pt-4 bg-background h-full px-5`}>
      <View style={tw`py-10 sm:py-14`}>
        <Text
          style={tw`mx-auto text-center mb-1 max-w-sm text-fg text-3xl font-bold`}
        >
          All Tasks
        </Text>
        <Text style={tw`mx-auto max-w-[260px] text-center text-subtle text-sm`}>
          All of your tasks including the compled ones are listed here.
        </Text>
      </View>

      <Tasks
        tasks={tasks}
        refresh={() => refresh((prev) => !prev)}
        status="Ongoing"
      />
      <Tasks
        tasks={tasks}
        refresh={() => refresh((prev) => !prev)}
        status="Pending"
      />
      <Tasks
        tasks={tasks}
        refresh={() => refresh((prev) => !prev)}
        status="Completed"
      />
      <Text style={tw`text-center text-muted my-1 text-xs`}>
        Tap to open, tap and hold for more options
      </Text>
    </SafeAreaView>
  );
}
