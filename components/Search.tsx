import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "../css/styles";
import Icon from "react-native-vector-icons/AntDesign";
export default function Search() {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchContent}>
        <TextInput
          style={styles.inputSearch}
          placeholder="Pesquisar..."
          placeholderTextColor="#FFF"
        />
        <Icon name="search1" size={26} color="#374857" />
      </View>
    </View>
  );
}
