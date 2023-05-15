import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CheckBox from "react-native-checkbox-component";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "../css/styles.js";

export default function RegisterInstitution({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonPrev}
          onPress={() => navigation.navigate("UserSelect")}>
          <Icon name="chevron-left" size={30} color="#374857" />
        </TouchableOpacity>
        <Text style={styles.title}>Cadastrar</Text>
        <View style={styles.divisor}>
          <View style={styles.hr} />
          <Text style={styles.titleDivisor}>Dados Pessoais</Text>
          <View style={styles.hr} />
        </View>
        <View style={styles.inputContent}>
          <Text style={styles.label}>Nome Completo</Text>
          <TextInput style={styles.input} placeholder="Nome Completo" />
        </View>
        <View style={styles.inputContent}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="Email" />
        </View>
        <View style={styles.inputContent}>
          <Text style={styles.label}>Telefone/Celular</Text>
          <TextInput style={styles.input} placeholder="(##)#####-####" />
        </View>
        <View style={styles.inputContent}>
          <Text style={styles.label}>Cnpj</Text>
          <TextInput style={styles.input} placeholder="##.###.###/####-##" />
        </View>
        <View style={styles.divisor}>
          <View style={styles.hr} />
          <Text style={styles.titleDivisor}>Endereço</Text>
          <View style={styles.hr} />
        </View>
        <View style={styles.inputContent}>
          <Text style={styles.label}>Rua</Text>
          <TextInput style={styles.input} placeholder="R." />
        </View>
        <View style={styles.inputContainerSecond}>
          <View style={styles.inputContentsecond}>
            <Text style={styles.label}>Bairro</Text>
            <TextInput style={styles.input} placeholder="Bairro" />
          </View>
          <View style={styles.inputContentfourth}>
            <Text style={styles.label}>Número</Text>
            <TextInput style={styles.input} placeholder="Num." />
          </View>
        </View>
        <View style={styles.inputContainerSecond}>
          <View style={styles.inputContentsecond}>
            <Text style={styles.label}>Cidade</Text>
            <TextInput style={styles.input} placeholder="Cidade" />
          </View>
          <View style={styles.inputContentfourth}>
            <Text style={styles.label}>Estado</Text>
            <TextInput style={styles.input} placeholder="UF" />
          </View>
        </View>
        <View style={styles.inputContainerSecond}>
          <View style={styles.inputContentthird}>
            <Text style={styles.label}>Cep</Text>
            <TextInput style={styles.input} placeholder="#####-###" />
          </View>
          <View style={styles.inputContentthird}>
            <Text style={styles.label}>Complemento</Text>
            <TextInput style={styles.input} placeholder="..." />
          </View>
        </View>
        <View style={styles.divisor}>
          <View style={styles.hr} />
          <Text style={styles.titleDivisor}>Senha</Text>
          <View style={styles.hr} />
        </View>
        <View style={styles.inputContent}>
          <Text style={styles.label}>Senha</Text>
          <TextInput style={styles.input} placeholder="Senha" />
        </View>
        <View style={styles.inputContent}>
          <Text style={styles.label}>Confirmar senha</Text>
          <TextInput style={styles.input} placeholder="Senha" />
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
