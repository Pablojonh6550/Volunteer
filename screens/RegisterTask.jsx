import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "../css/styles.js";
import { useNavigation, useRoute } from "@react-navigation/native";
import { registerTask } from "../database/firebase.js";

export default function RegisterTask() {
  const navigation = useNavigation();
  const route = useRoute();
  const userData = route.params.user;

  const [user, setUser] = useState(userData);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [initial, setInitial] = useState("");
  const [final, setFinal] = useState("");

  const handleValueChange = (itemValue, itemIndex) => {
    setCategory(itemValue);
  };

  const handleTask = () => {
    const data = {
      id: user,
      name: name,
      description: description,
      category: category,
      initial: parseInt(initial),
      final: parseInt(final),
    };

    registerTask(data);

    setUser(user);
    setName("");
    setDescription("");
    setCategory("");
    setInitial("");
    setFinal("");
    navigation.navigate("Tasks", { user });
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonPrev}
          onPress={() => navigation.navigate("Tasks", { user })}>
          <Icon name="chevron-left" size={30} color="#374857" />
        </TouchableOpacity>
        <Text style={styles.title}>Cadastrar Atividade</Text>
        <View style={styles.inputContent}>
          <Text style={styles.label}>Nome da Atividade</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome da Atividade"
            value={name}
            onChange={(event) => setName(event.nativeEvent.text)}
          />
        </View>
        <View style={styles.inputContent}>
          <Text style={styles.label}>Descrição</Text>
          <TextInput
            style={styles.textarea}
            multiline
            numberOfLines={4}
            placeholder="Descrição"
            value={description}
            onChange={(event) => setDescription(event.nativeEvent.text)}
          />
        </View>
        <View style={styles.inputContent}>
          <Text style={styles.label}>Categoria</Text>
          <Picker
            style={styles.selected}
            selectedValue={category}
            onValueChange={handleValueChange}>
            <Picker.Item label="Selecione uma opção" enabled={false} />
            <Picker.Item label="Campo" value="campo" />
            <Picker.Item label="Cozinha" value="cozinha" />
            <Picker.Item label="Alimento" value="alimento" />
            <Picker.Item label="Doação" value="doação" />
          </Picker>
        </View>
        <View style={styles.inputContent}>
          <Text style={styles.label}>Data de Inicio</Text>
          <TextInput
            style={styles.input}
            placeholder="##/##/####"
            value={initial}
            onChange={(event) => setInitial(event.nativeEvent.text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContent}>
          <Text style={styles.label}>Data de Final</Text>
          <TextInput
            style={styles.input}
            placeholder="##/##/####"
            value={final}
            onChange={(event) => setFinal(event.nativeEvent.text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.buttonContent}>
          <TouchableOpacity style={styles.buttonPrimary} onPress={handleTask}>
            <Text style={styles.buttonTitlePrimary}>Criar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
