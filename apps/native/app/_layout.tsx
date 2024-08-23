import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import { SheetProvider } from "react-native-actions-sheet";
import "@/components/sheets";
import QueryProvider from "./query-provider";
import tw from "@/lib/twrnc";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <QueryProvider>
        <SheetProvider>
          <Stack screenOptions={{ statusBarColor: "#233442" }}>
            <Stack.Screen
              name="(tabs)"
              options={{
                headerStyle: tw`bg-surface`,
                headerTitleAlign: "center",
                headerTitle: "Todoer",
              }}
            />
            <Stack.Screen
              name="task"
              options={{ presentation: "modal", headerShown: false }}
            />
            <Stack.Screen name="+not-found" />
          </Stack>
        </SheetProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}
