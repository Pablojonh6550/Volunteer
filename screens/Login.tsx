import React from "react";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import CheckBox from "react-native-checkbox-component";
import { styles } from "../css/styles.js";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../App.js";
import firebase from "../database/firebase.js";

export default function Login() {
  const navigation = useNavigation<StackTypes>();
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <View style={styles.inputContent}>
        <Text style={styles.label}>Digite seu email</Text>
        <TextInput style={styles.input} placeholder="Usuário" />
      </View>
      <View style={styles.inputContent}>
        <Text style={styles.label}>Digite sua senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.checkContent}>
        <CheckBox style={styles.checkButton} />
        <Text style={styles.label}>Lembrar-me</Text>
      </View>
      <View style={styles.buttonContent}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonSecond}
            onPress={() => navigation.navigate("UserSelect")}>
            <Text style={styles.buttonTitleSecond}>Cadastrar-se</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonPrimary}>
            <Text style={styles.buttonTitlePrimary}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
