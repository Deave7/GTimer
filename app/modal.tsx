import { View, Text } from "react-native";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/components/GlobalContext";
import { globalStyles } from "../styles/globalStyles";
import MyTimer from "@/components/MyTimer";

export default function ModalScreen() {
  const { currentWorkout } = useContext(GlobalContext);

  if (!currentWorkout) {
    return (
      <View style={globalStyles.container}>
        <Text>No workout selected.</Text>
      </View>
    );
  }



  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.h2}>Workout: Active Time</Text>
      <MyTimer expiryTimestamp={undefined} />
    </View>
  );
}
