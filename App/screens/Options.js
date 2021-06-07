import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import { RowItem, RowSeparator } from "../components/RowItem";

import colors from "../constants/colors";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.white,
  },
  title: {
    color: colors.text,
    fontSize: 16,
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});

export default () => {
  return (
    <SafeAreaView>
      {/* <TouchableOpacity onPress={() => alert("todo!")} style={styles.row}>
        <Text style={styles.title}>Themes</Text>
        <Entypo name="chevron-right" size={20} color={colors.blue} />
      </TouchableOpacity> */}
      <RowItem
        title="Themes"
        onPress={() => alert("todo!")}
        rightIcon={
          <Entypo name="chevron-right" size={20} color={colors.blue} />
        }
      />

      <RowSeparator />

      <RowItem
        title="React Native Basics"
        onPress={() => alert("todo!")}
        rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
      />

      <RowSeparator />

      <RowItem
        title="React Native by Example"
        onPress={() => alert("todo!")}
        rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
      />
    </SafeAreaView>
  );
};
