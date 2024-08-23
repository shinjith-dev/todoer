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


  useEffect(() => {
    if (!open) close();
  }, [open]);

  useEffect(() => {
    const update = async (newStatus: string) => {
      const newTask = await updateStatus(task?.id ?? -1, newStatus);
      if (newTask) {

        Alert.alert(
          "Task status updated",
          `Task status of "${task.name}" is updated to ${newTask.status}`,
        );

        setTimeout(() => {
          refresh();
        }, 600)
      }
    };

    if (task.status !== status) update(status)
  }, [status])

  return (
    <View style={tw`h-full flex justify-center items-center`}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={() => {
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
              onValueChange={setStatus}
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
