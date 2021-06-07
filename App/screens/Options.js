import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { RowItem, RowSeparator } from "../components/RowItem";
import colors from "../constants/colors";

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
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
      </ScrollView>
    </SafeAreaView>
  );
};
