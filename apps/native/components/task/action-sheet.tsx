import ActionSheet, {
  FlatList,
  SheetManager,
  SheetProps,
} from "react-native-actions-sheet";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import tw from "@/lib/twrnc";
import { useMemo } from "react";
import { removeTask, updateStatus } from "@/lib/queries";
import * as Burnt from "burnt";

export default function TaskAction({
  sheetId,
  payload,
}: SheetProps<"task-action">) {
  const update = async (status: string) => {
    const newTask = await updateStatus(payload?.task?.id ?? -1, status);
    if (newTask) {
      payload?.refresh();
      Burnt.toast({
        title: "Task status updated",
        message: `Task status of "${payload?.task.name}" is updated to ${newTask.status}`,
        from: "top",
      });
    }
    SheetManager.hide("task-action");
  };

  const remove = async () => {
    const isRemoved = await removeTask(payload?.task?.id ?? -1);
    if (isRemoved) {
      payload?.refresh();
      Burnt.toast({
        title: "Task deleted",
        message: `Task "${payload?.task.name}" is deleted`,
        from: "top",
      });
    }
    SheetManager.hide("task-action");
  };

  const options = useMemo(
    () => [
      {
        label: "Open",
        action: () => {
          SheetManager.hide("task-action");

          setTimeout(() => {
            SheetManager.show("task-sheet", {
              payload: { task: payload?.task },
            });
          }, 500);
        },
      },
      {
        label: "Edit",
        action: () => {
          SheetManager.hide("task-action");

          setTimeout(() => {
            SheetManager.show("edit-sheet", {
              payload: { task: payload?.task, refresh: payload?.refresh },
            });
          }, 500);
        },
      },
      { label: "Delete", action: remove },
      { label: "Update status", action: payload?.openStatusModal },
      {
        label: "Mark as completed",
        action: () => update("completed"),
        disabled: payload?.task.status === "completed",
      },
    ],
    [],
  );

  return (
    <ActionSheet
      id={sheetId}
      containerStyle={tw`bg-surface rounded-t-xl`}
      indicatorStyle={tw`bg-surface`}
    >
      <View style={tw`p-5 pb-7`}>
        <Text style={tw`text-xs text-subtle mb-1`}>{payload?.task.name}</Text>
        <Text style={tw`text-xl text-fg mb-3`}>Actions</Text>

        <FlatList
          data={options}
          keyExtractor={(item) => item?.label ?? ""}
          renderItem={({ item }) => (
            <TouchableOpacity
              disabled={item?.disabled}
              onPress={item.action}
              style={tw`py-3 border-b border-overlay/50 ${item.disabled ? "opacity-50" : ""}`}
              key={item.label}
            >
              <Text style={tw`text-subtle text-base`}>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ActionSheet>
  );
}
