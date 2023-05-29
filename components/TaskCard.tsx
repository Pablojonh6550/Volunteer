import React from "react";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "../css/styles";

export default function TaskCard() {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.iconContent}>
        <View style={styles.iconCard}>
          <Icon name="chevron-left" size={30} color="#374857" />
        </View>
      </View>
      <View style={styles.titleContent}>
        <Text style={styles.titleCardPrimary}>Nome da Atividade</Text>
        <Text style={styles.titleCardSecond}>Nome da instituição</Text>
        <Text style={styles.titleCardSecond}>Periodo</Text>
      </View>
      <View style={styles.imgContent}>
        <View style={styles.imgCard}>
          <Icon name="chevron-left" size={30} color="#fff" />
        </View>
      </View>
    </View>
  );
}
