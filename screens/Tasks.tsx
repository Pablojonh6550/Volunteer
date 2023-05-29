import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../css/styles";
import TabNavigation from "../components/TabNavigation";

export default function Tasks() {
  return (
    <View style={styles.perfilContainer}>
      <TabNavigation />
    </View>
  );
}
