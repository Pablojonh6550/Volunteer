import React from "react";
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
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../App.js";

export default function RegisterTask() {
  const navigation = useNavigation<StackTypes>();
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonPrev}
          onPress={() => navigation.navigate("UserSelect")}>
          <Icon name="chevron-left" size={30} color="#374857" />
        </TouchableOpacity>
        <Text style={styles.title}>Cadastrar Atividade</Text>
        <View style={styles.inputContent}>
          <Text style={styles.label}>Nome da Atividade</Text>
          <TextInput style={styles.input} placeholder="Nome da Atividade" />
        </View>
        <View style={styles.inputContent}>
          <Text style={styles.label}>Descrição</Text>
          <TextInput
            style={styles.textarea}
            multiline
            numberOfLines={4}
            placeholder="Descrição"
          />
        </View>
        <View style={styles.inputContent}>
          <Text style={styles.label}>Banner</Text>
          <TextInput style={styles.input} placeholder="Banner" />
        </View>
        <View style={styles.inputContent}>
          <Text style={styles.label}>Categoria</Text>
          <Picker style={styles.selected}>
            <Picker.Item label="Selecione uma opção" enabled={false} />
            <Picker.Item label="Campo" value="Campo" />
            <Picker.Item label="Cozinha" value="Cozinha" />
            <Picker.Item label="Alimento" value="Alimento" />
            <Picker.Item label="Doação" value="Doação" />
          </Picker>
        </View>
        <View style={styles.inputContent}>
          <Text style={styles.label}>Data de Inicio</Text>
          <TextInput style={styles.input} placeholder="##/##/####" />
        </View>
        <View style={styles.inputContent}>
          <Text style={styles.label}>Data de Final</Text>
          <TextInput style={styles.input} placeholder="##/##/####" />
        </View>
        <View style={styles.buttonContent}>
          <TouchableOpacity style={styles.buttonPrimary}>
            <Text style={styles.buttonTitlePrimary}>Criar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
