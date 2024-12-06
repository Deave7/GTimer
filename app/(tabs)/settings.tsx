import { View, Text, Switch, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import OptionItem from "../../components/OptionItem";
import { useContext } from "react";
import { GlobalContext } from "@/components/GlobalContext";



export default function Tab() {
  const { settings, setSettings } = useContext(GlobalContext);
  const toggleSettings = (key: string) => {
    const updatedSettings = settings.map((setting) => 
      setting.key === key ? { ...setting, value: !setting.value } : setting)
  }
  return (
    <View style={globalStyles.container}>
      <OptionItem description={"By default the timer displays seconds:\n1min = 60s.\nToggle this to display minutes and seconds instead: 2 min = 2:00"} title={"Time display"} value={false} onToggle={function (): void {
        throw new Error("Function not implemented.");
      } }/>
      <OptionItem description={"By default the last rest before you're intervals are finished is included.\nToggle this option to exclude it."} title={"Skip the last rest before finish"} value={false} onToggle={function (): void {
        throw new Error("Function not implemented.");
      } }/>
      <OptionItem description={"By defualt the last rest before set rest is included.\nToggle this option to exclude it."} title={"Skip the last rest before set rest"} value={false} onToggle={function (): void {
        throw new Error("Function not implemented.");
      } }/>
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
