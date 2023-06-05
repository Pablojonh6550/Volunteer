import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { styles } from "../css/styles.js";
import TabNavigation from "../components/TabNavigation";
import Search from "../components/Search";
import TaskCard from "../components/TaskCard";
import { RouteProp, useRoute } from "@react-navigation/native";

type RootStackParamList = {
  Data: { email: string | null };
};

type DestinoScreenRouteProp = RouteProp<RootStackParamList, "Data">;

export default function Home() {
  const route = useRoute<DestinoScreenRouteProp>();
  const { email } = route.params;
  const userEmail = JSON.stringify(email);

  return (
    <View style={styles.homeContainer}>
      <View style={styles.taskHomeContainer}>
        <ScrollView>
          <Text>{}</Text>
        </ScrollView>
      </View>
      <Search />
      <TabNavigation data={userEmail} />
    </View>
  );
}
