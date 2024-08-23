import { TTask } from "@/lib/types";
import { useState } from "react";
import tw from "@/lib/twrnc";
import { View, Text, Pressable } from "react-native";
import { SheetManager } from "react-native-actions-sheet";
import StatusModal from "./status-modal";
import { useRouter } from "expo-router";

type Props = {
  task: TTask;
  refresh: () => void;
};

export default function Task({ task, refresh }: Props) {
  const [statusModal, setModal] = useState(false);
  const openStatusModal = () => setModal(true);

  return (
    <>
      <Pressable
        onPress={() => SheetManager.show("task-sheet", { payload: { task } })}
        onLongPress={() =>
          SheetManager.show("task-action", {
            payload: { task, openStatusModal, refresh },
          })
        }
        style={tw`rounded p-4 my-2 flex gap-8 bg-surface/75 shadow items-start justify-between`}
      >
        <View>
          <Text style={tw`text-xl mb-2 text-fg font-medium`}>{task.name}</Text>
          <Text style={tw`text-xs text-subtle`}>{task.description}</Text>
        </View>
      </Pressable>

      {statusModal && (
        <StatusModal
          task={task}
          close={() => setModal(false)}
          refresh={refresh}
        />
      )}
    </>
  );
}
