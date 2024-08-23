import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "@/lib/twrnc";
import Tasks from "@/components/tasks";
import { useEffect, useState } from "react";
import { TTask } from "@/lib/types";
import { getTasks } from "@/lib/queries";

export default function HomeScreen() {
  const [tasks, setTasks] = useState<TTask[]>([]);
  const [forceUpdate, refresh] = useState(false);

  useEffect(() => {
    getTasks()
      .then(({ data, error }) => {
        if (error) {
          console.error("Failed fetch tasks", error);
          return;
        }
        if (data && data.length > 0) setTasks(data);
      })
      .catch((err) => {
        console.error("Failed fetch tasks", err);
      });
  }, [forceUpdate]);

  return (
    <SafeAreaView style={tw`pt-4 bg-background h-full px-5`}>
      <View style={tw`py-10 sm:py-14`}>
        <Text
          style={tw`mx-auto text-center mb-2 max-w-sm text-fg text-4xl font-bold tracking-tight`}
        >
          All in One Task Management System
        </Text>
        <Text style={tw`mx-auto max-w-xs text-center text-subtle`}>
          Track your tasks across devices and access it from wherever you go.
          Todoer allows to add and manage your tasks seamlessly and track your
          progress.
        </Text>
      </View>

      <Tasks
        status="Pending"
        tasks={tasks}
        refresh={() => refresh((prev) => !prev)}
      />

      <Text style={tw`text-center text-muted my-1 text-xs`}>
        Tap to open, tap and hold for more options
      </Text>
    </SafeAreaView>
  );
}
