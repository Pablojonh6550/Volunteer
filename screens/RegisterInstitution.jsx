import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "../css/styles.js";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { createUserInst } from "../database/firebase";

export default function RegisterInstitution() {
  const navigation = useNavigation();
  // Campos de cadastro instituição
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  // Campos de cadastro para o endereço
  const [road, setRoad] = useState("");
  const [district, setDistrict] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [cep, setCep] = useState("");
  const [complement, setComplement] = useState("");

  const handleRegisterUser = () => {
    if (password == confirm) {
      setPassword(password);
    } else {
      Alert.alert("Os campos de senhas são diferentes.");
    }
    const data = {
      name: name,
      email: email,
      phone: parseInt(phone),
      cnpj: parseInt(cnpj),
    };

    const adress = {
      road: road,
      district: district,
      number: parseInt(number),
      city: city,
      uf: uf,
      cep: parseInt(cep),
      complement: complement,
    };
    createUserInst(data, adress);

    setName("");
    setEmail("");
    setPhone("");
    setCnpj("");
    setPassword("");
    setConfirm("");
    setRoad("");
    setDistrict("");
    setNumber("");
    setCity("");
    setUf("");
    setCep("");
    setComplement("");
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
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
          <TextInput
            style={styles.input}
            placeholder="Nome Completo"
            value={name}
            onChange={(event) => setName(event.nativeEvent.text)}
          />
        </View>
        <View style={styles.inputContent}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.nativeEvent.text)}
          />
        </View>
        <View style={styles.inputContent}>
          <Text style={styles.label}>Telefone/Celular</Text>
          <TextInput
            style={styles.input}
            placeholder="(##)#####-####"
            keyboardType="numeric"
            value={phone}
            onChange={(event) => setPhone(event.nativeEvent.text)}
          />
        </View>
        <View style={styles.inputContent}>
          <Text style={styles.label}>Cnpj</Text>
          <TextInput
            style={styles.input}
            placeholder="##.###.###/####-##"
            keyboardType="numeric"
            value={cnpj}
            onChange={(event) => setCnpj(event.nativeEvent.text)}
          />
        </View>
        <View style={styles.divisor}>
          <View style={styles.hr} />
          <Text style={styles.titleDivisor}>Endereço</Text>
          <View style={styles.hr} />
        </View>
        <View style={styles.inputContent}>
          <Text style={styles.label}>Rua</Text>
          <TextInput
            style={styles.input}
            placeholder="R."
            value={road}
            onChange={(event) => setRoad(event.nativeEvent.text)}
          />
        </View>
        <View style={styles.inputContainerSecond}>
          <View style={styles.inputContentsecond}>
            <Text style={styles.label}>Bairro</Text>
            <TextInput
              style={styles.input}
              placeholder="Bairro"
              value={district}
              onChange={(event) => setDistrict(event.nativeEvent.text)}
            />
          </View>
          <View style={styles.inputContentfourth}>
            <Text style={styles.label}>Número</Text>
            <TextInput
              style={styles.input}
              placeholder="Num."
              keyboardType="numeric"
              value={number}
              onChange={(event) => setNumber(event.nativeEvent.text)}
            />
          </View>
        </View>
        <View style={styles.inputContainerSecond}>
          <View style={styles.inputContentsecond}>
            <Text style={styles.label}>Cidade</Text>
            <TextInput
              style={styles.input}
              placeholder="Cidade"
              value={city}
              onChange={(event) => setCity(event.nativeEvent.text)}
            />
          </View>
          <View style={styles.inputContentfourth}>
            <Text style={styles.label}>Estado</Text>
            <TextInput
              style={styles.input}
              placeholder="UF"
              value={uf}
              onChange={(event) => setUf(event.nativeEvent.text)}
            />
          </View>
        </View>
        <View style={styles.inputContainerSecond}>
          <View style={styles.inputContentthird}>
            <Text style={styles.label}>Cep</Text>
            <TextInput
              style={styles.input}
              placeholder="#####-###"
              keyboardType="numeric"
              value={cep}
              onChange={(event) => setCep(event.nativeEvent.text)}
            />
          </View>
          <View style={styles.inputContentthird}>
            <Text style={styles.label}>Complemento</Text>
            <TextInput
              style={styles.input}
              placeholder="..."
              value={complement}
              onChange={(event) => setComplement(event.nativeEvent.text)}
            />
          </View>
        </View>
        <View style={styles.divisor}>
          <View style={styles.hr} />
          <Text style={styles.titleDivisor}>Senha</Text>
          <View style={styles.hr} />
        </View>
        <View style={styles.inputContent}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChange={(event) => setPassword(event.nativeEvent.text)}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.inputContent}>
          <Text style={styles.label}>Confirmar senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirmar senha"
            secureTextEntry={true}
            value={confirm}
            onChange={(event) => setConfirm(event.nativeEvent.text)}
          />
        </View>
        <View style={styles.buttonContent}>
          <TouchableOpacity
            style={styles.buttonPrimary}
            onPress={handleRegisterUser}>
            <Text style={styles.buttonTitlePrimary}>Criar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
