import React from "react";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../css/styles";

export default function TaskCard() {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.iconContent}>
        <View style={styles.iconCard}></View>
      </View>
      <View style={styles.titleContent}>
        <Text style={styles.titleCardPrimary}>Nome da Atividade</Text>
        <Text style={styles.titleCardSecond}>Nome da instituição</Text>
        <Text style={styles.titleCardSecond}>Periodo</Text>
      </View>
      <View style={styles.imgContent}>
        <View style={styles.imgCard}>
          <Text>teste</Text>
        </View>
      </View>
    </View>
  );
}
