import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "../css/styles";
import { useRoute } from "@react-navigation/native";
import TabNavigation from "../components/TabNavigation";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../database/firebase";

export default function Perfil() {
  const route = useRoute();
  const userData = route.params.user;
  const [users, setUsers] = useState(userData);
  const [data, setData] = useState("");
  useEffect(() => {
    const user = async (user) => {
      const usersCollectionRef = collection(db, "users");
      const q = query(usersCollectionRef, where("__name__", "==", user));

      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          const response = doc.data();
          setData(response);
          setUsers(users);
        });
      } else {
        console.log("Usuário não encontrado");
        setData("");
      }
    };
    user(users);
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
              <TextInput
                style={styles.input}
                editable={false}
                placeholderTextColor="black"
                placeholder="Nome Completo"
                value={data.name ? data.name : undefined}
              />
            </View>
            <View style={styles.inputContent}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                editable={false}
                placeholderTextColor="black"
                placeholder="Email"
                value={data.email ? data.email : undefined}
              />
            </View>
            <View style={styles.inputContent}>
              <Text style={styles.label}>Telefone/Celular</Text>
              <TextInput
                style={styles.input}
                editable={false}
                placeholderTextColor="black"
                placeholder="(##)#####-####"
                value={
                  data.phone
                    ? data.phone
                        .toString()
                        .replace(/\D/g, "")
                        .replace(/(\d{2})(\d{4,5})(\d{4})/, "($1) $2-$3")
                    : undefined
                }
              />
            </View>
            <View style={styles.inputContent}>
              <Text style={styles.label}>Data de nascimento</Text>
              <TextInput
                style={styles.input}
                editable={false}
                placeholderTextColor="black"
                placeholder="##/##/####"
                value={
                  data.birth
                    ? data.birth
                        .toString()
                        .replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3")
                    : undefined
                }
              />
            </View>
            <Text style={styles.title}>Endereço</Text>
            <View style={styles.inputContent}>
              <Text style={styles.label}>Rua</Text>
              <TextInput
                style={styles.input}
                editable={false}
                placeholderTextColor="black"
                placeholder="R."
                value={data.road ? data.road : undefined}
              />
            </View>
            <View style={styles.inputContainerSecond}>
              <View style={styles.inputContentsecond}>
                <Text style={styles.label}>Bairro</Text>
                <TextInput
                  style={styles.input}
                  editable={false}
                  placeholderTextColor="black"
                  placeholder="Bairro"
                  value={data.district ? data.district : undefined}
                />
              </View>
              <View style={styles.inputContentfourth}>
                <Text style={styles.label}>Número</Text>
                <TextInput
                  style={styles.input}
                  editable={false}
                  placeholderTextColor="black"
                  placeholder="Num."
                  value={data.number ? data.number.toString() : undefined}
                />
              </View>
            </View>
            <View style={styles.inputContainerSecond}>
              <View style={styles.inputContentsecond}>
                <Text style={styles.label}>Cidade</Text>
                <TextInput
                  style={styles.input}
                  editable={false}
                  placeholderTextColor="black"
                  placeholder="Cidade"
                  value={data.city ? data.city : undefined}
                />
              </View>
              <View style={styles.inputContentfourth}>
                <Text style={styles.label}>Estado</Text>
                <TextInput
                  style={styles.input}
                  editable={false}
                  placeholderTextColor="black"
                  placeholder="UF"
                  value={data.uf ? data.uf : undefined}
                />
              </View>
            </View>
            <View style={styles.inputContainerSecond}>
              <View style={styles.inputContentthird}>
                <Text style={styles.label}>Cep</Text>
                <TextInput
                  style={styles.input}
                  editable={false}
                  placeholderTextColor="black"
                  placeholder="#####-###"
                  value={
                    data.cep
                      ? data.cep
                          .toString()
                          .replace(/\D/g, "")
                          .replace(/(\d{5})(\d{3})/, "$1-$2")
                      : undefined
                  }
                />
              </View>
              <View style={styles.inputContentthird}>
                <Text style={styles.label}>Complemento</Text>
                <TextInput
                  style={styles.input}
                  editable={false}
                  placeholderTextColor="black"
                  placeholder="..."
                  value={data?.complement ? data?.complement : undefined}
                />
              </View>
            </View>
            {/* <View style={styles.buttonPerfilContainer}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonPrimary}>
                  <Text style={styles.buttonTitlePrimary}>Salvar</Text>
                </TouchableOpacity>
              </View>
            </View> */}
          </View>
        </ScrollView>
      </View>
      <TabNavigation userData={users} />
    </View>
  );
}
