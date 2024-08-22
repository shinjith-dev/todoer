import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "@/lib/twrnc";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView style={tw`pt-8`}>
        <View style={tw`py-10 sm:py-14`}>
          <Text
            style={tw`mx-auto text-center mb-2 max-w-sm font-serif text-4xl font-bold tracking-tight`}
          >
            All in One Task Management System
          </Text>
          <Text style={tw`mx-auto max-w-xs text-center`}>
            Track your tasks across devices and access it from wherever you go.
            Todoer allows to add and manage your tasks seamlessly and track your
            progress.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
