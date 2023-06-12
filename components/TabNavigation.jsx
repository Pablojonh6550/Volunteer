import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../css/styles";
import Icon from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

export default function TabNavigation(props) {
  const navigation = useNavigation();
  const { userData } = props;
  const [user, setUser] = useState(userData);

  const handleHome = () => {
    navigation.navigate("Home", { user });
    setUser(user);
  };
  const handleTasks = () => {
    navigation.navigate("Tasks", { user });
    setUser(user);
  };
  const handleUser = () => {
    navigation.navigate("Perfil", { user });
    setUser(user);
  };
  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabContent}>
        <TouchableOpacity style={styles.tabButtonActive} onPress={handleHome}>
          <Icon name="home-outline" size={26} color="#fff" />
          <Text style={styles.tabTitle}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={handleTasks}>
          <Icon name="list-outline" size={26} color="#fff" />
          <Text style={styles.tabTitle}>Tarefas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={handleUser}>
          <Icons name="user" size={26} color="#fff" />
          <Text style={styles.tabTitle}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
