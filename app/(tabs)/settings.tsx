import { View, Text, Switch, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import OptionItem from "../../components/OptionItem";



export default function Tab() {
  return (
    <View style={globalStyles.container}>
      <OptionItem description={"By default the timer displays seconds:\n1min = 60s.\nToggle this to display minutes and seconds instead: 2 min = 2:00"} title={"Time display"}/>
      <OptionItem description={"By default the last rest before you're intervals are finished is included.\nToggle this option to exclude it."} title={"Skip the last rest before finish"}/>
      <OptionItem description={"By defualt the last rest before set rest is included.\nToggle this option to exclude it."} title={"Skip the last rest before set rest"}/>
    </View>
  );
}

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
});
