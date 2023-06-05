import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "../css/styles";
import { RouteProp, useRoute } from "@react-navigation/native";
import { db, getDocs, collection } from "../database/firebase";
import { QuerySnapshot, DocumentData, query, where } from "firebase/firestore";
import TabNavigation from "../components/TabNavigation";

type RootStackParamList = {
  Data: { email: { data: string } };
};

type DestinoScreenRouteProp = RouteProp<RootStackParamList, "Data">;

interface User {
  name: string;
  email: string;
  phone: number;
  sex: string;
  birth: number;
  password: string;
  road: string;
  district: string;
  number: number;
  city: string;
  uf: string;
  cep: number;
  complement: string;
}

export default function Perfil() {
  const route = useRoute<DestinoScreenRouteProp>();
  const { email } = route.params;
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const userData = async () => {
      const usersCollection = collection(db, "users");
      const q = query(
        usersCollection,
        where("email", "==", "pablojonh6550@gmail.com")
      );
      const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);
      const users: User[] = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setData(users);
      console.log(data);
    };

    userData();
  }, []);

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
      <TabNavigation props={email.data} />
    </View>
  );
}
