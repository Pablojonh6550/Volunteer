import React from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "../css/styles";
import TabNavigation from "../components/TabNavigation";

export default function Perfil() {
  return (
    <View style={styles.perfilContainer}>
      <View style={styles.perfilContent}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.perfilDataContent}>
            <Text style={styles.title}>Dados Pessoais</Text>
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
              <Text style={styles.label}>Data de nascimento</Text>
              <TextInput style={styles.input} placeholder="##/##/####" />
            </View>
            <Text style={styles.title}>Endereço</Text>
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
            <View style={styles.buttonPerfilContainer}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonPrimary}>
                  <Text style={styles.buttonTitlePrimary}>Salvar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <TabNavigation />
    </View>
  );
}
