import React from "react";
import { View, ScrollView, Text } from "react-native";
import { styles } from "../css/styles.js";
import TabNavigation from "../components/TabNavigation";
import Search from "../components/Search";
import TaskCard from "../components/TaskCard";

export default function Home() {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.taskHomeContainer}>
        <ScrollView>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </ScrollView>
      </View>
      <Search />
      <TabNavigation />
    </View>
  );
}
