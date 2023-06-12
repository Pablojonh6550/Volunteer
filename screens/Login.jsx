import React, { useEffect, useState } from "react";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import CheckBox from "react-native-checkbox-component";
import { styles } from "../css/styles.js";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../database/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const data = {
      email: email,
      password: password,
    };

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          console.log("Usuário autenticado:", userCredential.user.uid);
          const userData = userCredential.user.uid;
          navigation.navigate("Home", { userData });
          setEmail("");
          setPassword("");
        })
        .catch();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <View style={styles.inputContent}>
        <Text style={styles.label}>Digite seu email</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={email}
          onChange={(event) => setEmail(event.nativeEvent.text)}
        />
      </View>
      <View style={styles.inputContent}>
        <Text style={styles.label}>Digite sua senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={password}
          onChange={(event) => setPassword(event.nativeEvent.text)}
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
          <TouchableOpacity style={styles.buttonPrimary} onPress={handleLogin}>
            <Text style={styles.buttonTitlePrimary}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
