import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CheckBox from "react-native-checkbox-component";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "../css/styles.js";
import { StackTypes } from "../App.js";
import { useState } from "react";
import { db, createUser } from "../database/firebase";
import UUIDGenerator from "react-native-uuid";

interface UUID {
  toString(): string;
}
interface User {
  name: string;
  email: string;
  phone: number;
  sex: string;
  birth: number;
  password: string;
}

interface Adress {
  road: string;
  district: string;
  number: number;
  city: string;
  uf: string;
  cep: number;
  complement: string;
}

export default function RegisterUser() {
  const navigation = useNavigation<StackTypes>();
  // Campos de cadastro dados do usuário
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sex, setSex] = useState("");
  const [birth, setBirth] = useState("");
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

  const generateUUID = (): UUID => {
    const uuid: UUID = UUIDGenerator.v4();
    return uuid;
  };

  const handleRegisterUser = () => {
    try {
      if (password == confirm) {
        setPassword(password);
      } else {
        Alert.alert("Os campos de senhas são diferentes.");
      }

      const id = generateUUID();
      const data: User = {
        name: name,
        email: email,
        phone: parseInt(phone),
        sex: sex,
        birth: parseInt(birth),
        password: password,
      };

      const adress: Adress = {
        road: road,
        district: district,
        number: parseInt(number),
        city: city,
        uf: uf,
        cep: parseInt(cep),
        complement: complement,
      };
      createUser(data, adress);

      setName("");
      setEmail("");
      setPhone("");
      setBirth("");
      setSex("");
      setPassword("");
      setConfirm("");
      setRoad("");
      setDistrict("");
      setNumber("");
      setCity("");
      setUf("");
      setCep("");
      setComplement("");
    } catch (error) {
      console.log("Erro ao adicionar usuário:", error);
    }
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
            value={phone}
            onChange={(event) => setPhone(event.nativeEvent.text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContent}>
          <Text style={styles.label}>Data de nascimento</Text>
          <TextInput
            style={styles.input}
            placeholder="##/##/####"
            value={birth}
            onChange={(event) => setBirth(event.nativeEvent.text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.checkContent}>
          <Text style={styles.label}>Sexo</Text>
          <CheckBox style={styles.checkButton} />
          <Text style={styles.label}>Masculino</Text>
          <CheckBox style={styles.checkButton} />
          <Text style={styles.label}>Feminino</Text>
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
              value={number}
              onChange={(event) => setNumber(event.nativeEvent.text)}
              keyboardType="numeric"
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
              value={cep}
              onChange={(event) => setCep(event.nativeEvent.text)}
              keyboardType="numeric"
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
            secureTextEntry={true}
            value={password}
            onChange={(event) => setPassword(event.nativeEvent.text)}
          />
        </View>
        <View style={styles.inputContent}>
          <Text style={styles.label}>Confirmar senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirmar Senha"
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
