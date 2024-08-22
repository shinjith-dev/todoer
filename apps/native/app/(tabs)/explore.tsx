import tw from "@/lib/twrnc";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <ScrollView style={tw`mt-8`}>
        <Text>Pending Task will be listed here</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
