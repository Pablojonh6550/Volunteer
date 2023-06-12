import React, { useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { styles } from "../css/styles.js";
import TabNavigation from "../components/TabNavigation";
import Search from "../components/Search";
import TaskCard from "../components/TaskCard";
import { useRoute } from "@react-navigation/native";
import { db, collection, getDocs } from "../database/firebase";
export default function Home() {
  const route = useRoute();
  const userData = route.params.userData;
  const [userId, setUserId] = useState(userData);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const handleAllTasks = async () => {
      const allTasks = await getDocs(collection(db, "tasks"));
      const objects = allTasks.docs.map((doc) => doc.data());
      setTasks(objects);
      setUserId(userData);
    };
    handleAllTasks();
  }, []);

  return (
    <View style={styles.homeContainer}>
      <View style={styles.taskHomeContainer}>
        <ScrollView>
          {tasks.map((task, index) => {
            return <TaskCard key={index} props={task} id={userId} />;
          })}
        </ScrollView>
      </View>
      <Search />
      <TabNavigation userData={userData} />
    </View>
  );
}
