import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import tw from "@/lib/twrnc";
import { addTask, updateTask } from "@/lib/queries";
import { TTask } from "@/lib/types";

export default function TaskForm({
  edit,
  close,
}: {
  edit?: TTask;
  close: () => void;
}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: edit?.name ?? "",
      description: edit?.description ?? "",
    },
  });
  const onSubmit = async (data: any) => {
    const newTask = edit
      ? await updateTask(edit?.id ?? -1, data)
      : await addTask(data);
    if (newTask) {
      if (edit) Alert.alert("Task updated", `Task "${edit.name}" is updated`);
      else
        Alert.alert(
          "New Task Added",
          `New task "${newTask[0].name}" is added to tasks`,
        );
    }
    close();
    // router.push('/')
  };

  return (
    <View style={tw`w-full`}>
      <Text style={tw`text-sm text-subtle mb-1`}>Task name</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Enter task name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor="#b8b8b8"
            style={tw`w-full border border-overlay mb-4 rounded px-4 py-2 text-subtle`}
          />
        )}
        name="name"
      />
      {errors.name && <Text>This is required.</Text>}

      <Text style={tw`text-sm text-subtle mb-1`}>Description</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            multiline={true}
            numberOfLines={3}
            placeholderTextColor="#b8b8b8"
            style={tw`w-full border border-overlay mb-6 rounded px-4 py-2 text-subtle`}
          />
        )}
        name="description"
      />

      <Button
        title={edit ? "Save task" : "Add task"}
        color={"#81a7b4"}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
}
