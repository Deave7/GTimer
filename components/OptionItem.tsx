import { View, Text, Switch, StyleSheet, } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { useState } from "react";

type OptionItemProps = {
  description: string;
  title: string;
  value: boolean;
  onToggle: () => void;
}

const OptionItem: React.FC<OptionItemProps> = ({ description, title, value, onToggle }) => {

  return (
    <View style={globalStyles.container}>
      <View style={styles.optionsContainer}>
        <View style={styles.textContainer}>
          <Text style={globalStyles.h2}>{title}</Text>
          <Text style={globalStyles.desctiptionText}>
            {description}
          </Text>
        </View>
        <View style={styles.toggleContainer}>
          <Switch
            trackColor={{ false: "red", true: "green" }}
            thumbColor={"white"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={onToggle}
            value={value}
          />
        </View>
      </View>
      <View style={styles.line}></View>
    </View>
  );
}

export default OptionItem;

const styles = StyleSheet.create({
  optionsContainer: {
    flexDirection: "row",
    width: "80%",
  },
  toggleContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  textContainer: {
    flexDirection: "column",
    width: "90%",
    gap: 10,
  },
  line: {
        height: 1,
        backgroundColor: "gray",
        width: "90%", // 
        marginVertical: 10, 

  }
});

