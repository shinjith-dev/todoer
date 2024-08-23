import ActionSheet, { SheetProps } from "react-native-actions-sheet";
import { View, Text } from "react-native";
import tw from "@/lib/twrnc";

export default function TaskSheet({
  sheetId,
  payload,
}: SheetProps<"task-sheet">) {
  if (!payload?.task) return null;

  return (
    <ActionSheet
      id={sheetId}
      containerStyle={tw`bg-surface rounded-t-xl`}
      indicatorStyle={tw`bg-surface`}
    >
      <View style={tw`p-5 pb-7`}>
        <Text style={tw`text-2xl font-semibold text-fg mb-2`}>
          {payload?.task.name}
        </Text>
        <Text style={tw`text-base text-subtle mb-2`}>
          {payload?.task.description}
        </Text>
        <Text style={tw`text-sm text-primary mb-3 text-center`}>
          Status: {payload?.task.status}
        </Text>
      </View>
    </ActionSheet>
  );
}
