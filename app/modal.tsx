import { View, Text, Button, TouchableOpacity, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { globalStyles } from '../styles/globalStyles';
import MyTimer from "@/components/MyTimer";


export default function ModalScreen() {
  const router = useRouter();
    const time = new Date();
    time.setSeconds(time.getSeconds() + 300);
  return (
    <View style={globalStyles.container}>
      <MyTimer expiryTimestamp={time} />
    </View>
  );
}
