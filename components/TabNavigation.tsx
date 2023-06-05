import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../css/styles";
import Icon from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../App.js";

export default function TabNavigation(props: string | null) {
  const navigation = useNavigation<StackTypes>();
  const email = props;
  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabContent}>
        <TouchableOpacity
          style={styles.tabButtonActive}
          onPress={() => navigation.navigate("Home")}>
          <Icon name="home-outline" size={26} color="#fff" />
          <Text style={styles.tabTitle}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => navigation.navigate("Tasks")}>
          <Icon name="list-outline" size={26} color="#fff" />
          <Text style={styles.tabTitle}>Tarefas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => navigation.navigate("Perfil", { email })}>
          <Icons name="user" size={26} color="#fff" />
          <Text style={styles.tabTitle}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
