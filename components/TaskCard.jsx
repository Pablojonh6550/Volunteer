import React, { useState } from "react";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/AntDesign";
import { styles } from "../css/styles";

export default function TaskCard({ props }) {
  const [data, setData] = useState(props);
  const dataString = data.initial.toString();

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
        <View style={styles.imgCard}>
          <Icons name="rightcircleo" size={36} color="#5E548E" />
        </View>
      </View>
    </View>
  );
}
