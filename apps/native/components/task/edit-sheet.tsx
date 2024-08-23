import ActionSheet, {
  SheetManager,
  SheetProps,
} from "react-native-actions-sheet";
import { View } from "react-native";
import tw from "@/lib/twrnc";
import TaskForm from "../task-form";

export default function EditSheet({
  sheetId,
  payload,
}: SheetProps<"edit-sheet">) {
  const handleClose = () => {
    SheetManager.hide("edit-sheet");
    if (payload?.refresh) payload?.refresh();
  };

  if (!payload?.task) return null;

  return (
    <ActionSheet
      id={sheetId}
      containerStyle={tw`bg-surface rounded-t-xl`}
      indicatorStyle={tw`bg-surface`}
    >
      <View style={tw`p-5 pb-7`}>
        <TaskForm edit={payload?.task} close={handleClose} />
      </View>
    </ActionSheet>
  );
}
