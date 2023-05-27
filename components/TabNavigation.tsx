import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../css/styles";
import Icon from "react-native-vector-icons/AntDesign";
import Icons from "react-native-vector-icons/Octicons";

export default function TabNavigation() {
  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabContent}>
        <TouchableOpacity style={styles.tabButtonActive}>
          <Icon name="home" size={26} color="#fff" />
          <Text style={styles.tabTitle}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Icons name="list-unordered" size={26} color="#fff" />
          <Text style={styles.tabTitle}>Tarefas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Icon name="user" size={26} color="#fff" />
          <Text style={styles.tabTitle}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
