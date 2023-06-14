import React, { useState } from "react";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../css/styles";

export default function TaskCard({ props, id, tasksId }) {
  const [data, setData] = useState(props);
  const [user, setUser] = useState(id);
  const [taskId, setTaskId] = useState(tasksId);
  const dataString = data.initial.toString();
  const navigation = useNavigation();

  const handleTask = () => {
    navigation.navigate("DescriptionTask", { data, user, taskId });
  };

  return (
    <View style={styles.taskContainer}>
      <View style={styles.iconContent}>
        <View style={styles.iconCard}>
          <Icon name="bookmark-outline" size={30} color="#fff" />
        </View>
      </View>
      <View style={styles.titleContent}>
        <Text style={styles.titleCardPrimary}>{data.name}</Text>
        <Text style={styles.titleCardSecond}>Categoria: {data.category}</Text>
        <Text style={styles.titleCardSecond}>
          Inicio:
          {`${dataString.substr(0, 2)}/${dataString.substr(
            2,
            2
          )}/${dataString.substr(4)}`}
        </Text>
      </View>
      <View style={styles.imgContent}>
        <TouchableOpacity onPress={handleTask}>
          <View style={styles.imgCard}>
            <Icons name="rightcircleo" size={36} color="#5E548E" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
