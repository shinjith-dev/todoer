import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarActiveBackgroundColor: "#233442",
        tabBarInactiveBackgroundColor: "#233442",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Pending",
          tabBarIcon: ({ color }: { color: string }) => (
            <TabBarIcon name={"pending"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="add-task"
        options={{
          title: "New Task",
          tabBarIcon: ({ color }: { color: string }) => (
            <TabBarIcon name={"new"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "All tasks",
          tabBarIcon: ({ color }: { color: string }) => (
            <TabBarIcon name={"all"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
