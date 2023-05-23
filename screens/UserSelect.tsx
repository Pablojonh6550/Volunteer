import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "../css/styles.js";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../App.js";

export default function UserSelect() {
  const navigation = useNavigation<StackTypes>();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonPrev}
        onPress={() => navigation.navigate("Login")}>
        <Icon name="chevron-left" size={30} color="#374857" />
      </TouchableOpacity>
      <Text style={styles.title}>Escolha seu perfil</Text>
      <View style={styles.profileContainer}>
        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => navigation.navigate("RegisterUser")}>
          <Text style={styles.buttonTitlePrimary}>Voluntário</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => navigation.navigate("RegisterInstitution")}>
          <Text style={styles.buttonTitlePrimary}>Instituição</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
