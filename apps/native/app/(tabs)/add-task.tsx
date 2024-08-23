import tw from "@/lib/twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import TaskForm from "@/components/task-form";

export default function AddTask() {
  return (
    <SafeAreaView style={tw`pt-4 bg-background h-full px-5`}>
      <View style={tw`flex items-center justify-center`}>
        <View style={tw`py-10 sm:py-14`}>
          <Text
            style={tw`mx-auto text-center mb-1 max-w-sm text-fg text-3xl font-bold`}
          >
            Add New Task
          </Text>
          <Text
            style={tw`mx-auto max-w-[260px] text-center text-subtle text-sm`}
          >
            Start your day by adding tasks to Todoer, regularly update and
            analyse tasks for effective time management.
          </Text>
        </View>

        <TaskForm close={() => {}} />
      </View>
    </SafeAreaView>
  );
}
