import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { styles } from "../css/styles";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { registerUserTask } from "../database/firebase";

export default function DescriptionTask() {
  const navigation = useNavigation();
  const route = useRoute();
  const userData = route.params.user;
  const taskData = route.params.data;
  const taskId = route.params.taskId;
  const [user, setUser] = useState(userData);
  const [data, setData] = useState(taskData);
  const dateStringI = data.initial.toString();
  const dateStringF = data.final.toString();

  const handleRegisterUserTask = () => {
    const data = {
      userId: user,
      taskId: taskId,
    };
    // console.log(data);
    registerUserTask(data);
  };
  return (
    <View style={styles.containerDesc}>
      <View style={styles.titleDescContent}>
        <View style={styles.iconDesc}>
          <Icon name="bookmark-outline" size={38} color="#fff" />
        </View>
        <View style={styles.titlesDescContent}>
          <Text style={styles.titleDesc}>Lugar</Text>
          <Text style={styles.titleDescSmall}>Categoria: {data.category}</Text>
        </View>
      </View>
      <View style={styles.taskDescTitle}>
        <Text style={styles.taskDescTitleP}>Atividade: {data.name}</Text>
        <Text style={styles.taskDescTitleDate}>
          Data Inicial:
          {`${dateStringI.substr(0, 2)}/${dateStringI.substr(
            2,
            2
          )}/${dateStringI.substr(4)}`}
        </Text>
        <Text style={styles.taskDescTitleDate}>
          Data Final:
          {`${dateStringF.substr(0, 2)}/${dateStringF.substr(
            2,
            2
          )}/${dateStringF.substr(4)}`}
        </Text>
      </View>
      <View style={styles.taskDescTitle}>
        <Text style={styles.taskDescTitleP}>Descrição:</Text>
        <View style={styles.descTask}>
          <Text style={styles.taskDescTitleDate}>{data.description}</Text>
        </View>
      </View>
      <View style={styles.buttonContent}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonSecond}>
            <Text style={styles.buttonTitleSecond}>Fechar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonPrimary}
            onPress={handleRegisterUserTask}>
            <Text style={styles.buttonTitlePrimary}>Candidatar-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
