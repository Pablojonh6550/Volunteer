import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "../css/styles";

export default function Search() {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.inputSearch}
        placeholder="Pesquisar..."
        placeholderTextColor="#FFF"
      />
    </View>
  );
}
