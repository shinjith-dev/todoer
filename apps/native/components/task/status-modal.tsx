import { updateStatus } from "@/lib/queries";
import tw from "@/lib/twrnc";
import { TTask } from "@/lib/types";
import { IconX } from "@tabler/icons-react-native";
import React, { useState, useEffect } from "react";
import { Alert, Modal, Text, TouchableOpacity, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

type Props = {
  task: TTask;
  close: () => void;
  refresh: () => void;
};

export default function StatusModal({ task, close, refresh }: Props) {
  const [status, setStatus] = useState<string>(task.status);
  const [open, setOpen] = useState(true);

  const update = async (newStatus: string) => {
    console.log("update status of", task.id, "to", newStatus);
    const newTask = await updateStatus(task?.id ?? -1, newStatus);
    if (newTask) {
      refresh();
      setStatus(newTask[0].status);
      Alert.alert(
        "Task status updated",
        `Task status of "${task.name}" is updated to ${newTask[0].status}`,
      );
    }
    setOpen(false);
  };

  useEffect(() => {
    if (!open) close();
  }, [open]);

  return (
    <View style={tw`h-full flex justify-center items-center`}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setOpen(false);
        }}
      >
        <View style={tw`flex justify-center h-full w-full items-center`}>
          <View style={tw`p-5 bg-surface shadow rounded-md w-[90%]`}>
            <View style={tw`flex justify-between gap-4 flex-row`}>
              <Text style={tw`text-fg text-lg font-medium`}>{task.name}</Text>

              <TouchableOpacity onPress={() => setOpen(false)}>
                <IconX size={20} style={tw`text-subtle`} />
              </TouchableOpacity>
            </View>

            <RNPickerSelect
              value={status}
              onValueChange={update}
              items={[
                { label: "Pending", value: "pending" },
                { label: "Ongoing", value: "ongoing" },
                { label: "Completed", value: "completed" },
              ]}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
