import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import CheckBox from "react-native-checkbox-component";
import { styles } from "../css/styles.js";

export default function RegisterUser({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Cadastrar</Text>
      </View>
    </View>
  );
}
