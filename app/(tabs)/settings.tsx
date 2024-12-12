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
    <OptionItem
      description={
        "By default the timer displays seconds:\n1min = 60s.\nToggle this to display minutes and seconds instead: 2 min = 2:00"
      }
      title={"Time display"}
      value={settings.find((s) => s.key === "minuteToggle")?.value || false}
      onToggle={() => toggleSettings("minuteToggle")}
    />
    <OptionItem
      description={
        "By default the last rest before the intervals are finished is included.\nToggle this option to exclude it."
      }
      title={"Skip the last rest before finish"}
      value={settings.find((s) => s.key === "skipLastRestToggle")?.value || false}
      onToggle={() => toggleSettings("skipLastRestToggle")}
    />
    <OptionItem
      description={
        "By defualt the last rest before the set rest is included.\nToggle this option to exclude it."
      }
      title={"Skip the last rest before set rest"}
      value={settings.find((s) => s.key === "skipRestBeforeSetRestToggle")?.value || false}
      onToggle={() => toggleSettings("skipRestBeforeSetRestToggle")}
    />
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
