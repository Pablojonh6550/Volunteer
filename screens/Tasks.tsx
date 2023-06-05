import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../css/styles";
import TabNavigation from "../components/TabNavigation";
import TaskCard from "../components/TaskCard";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../App";

export default function Tasks() {
  const navigation = useNavigation<StackTypes>();
  return (
    <View style={styles.perfilContainer}>
      <View style={styles.taskScreenContainer}>
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
        </ScrollView>
      </View>
      <View style={styles.createTaskButton}>
        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => navigation.navigate("RegisterTask")}>
          <Text style={styles.buttonTitlePrimary}>Criar</Text>
        </TouchableOpacity>
      </View>
      <TabNavigation />
    </View>
  );
}
