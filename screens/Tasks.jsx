import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../css/styles";
import TabNavigation from "../components/TabNavigation";
import TaskCard from "../components/TaskCard";
import { useNavigation, useRoute } from "@react-navigation/native";
import { db, collection, getDocs } from "../database/firebase";

export default function Tasks() {
  const navigation = useNavigation();
  const route = useRoute();
  const userData = route.params.user;
  const [user, setUser] = useState(userData);
  const handleCreateTask = () => {
    navigation.navigate("RegisterTask", { user });
    setUser(user);
  };
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const handleAllTasks = async () => {
      const allTasks = await getDocs(collection(db, "tasks"));
      const objects = allTasks.docs.map((doc) => doc.data());
      setTasks(objects);
    };
    handleAllTasks();
  }, []);
  return (
    <View style={styles.perfilContainer}>
      <View style={styles.taskScreenContainer}>
        <ScrollView>
          {tasks.map((task, index) => {
            return <TaskCard key={index} props={task} />;
          })}
        </ScrollView>
      </View>
      <View style={styles.createTaskButton}>
        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={handleCreateTask}>
          <Text style={styles.buttonTitlePrimary}>Criar</Text>
        </TouchableOpacity>
      </View>
      <TabNavigation userData={user} />
    </View>
  );
}
