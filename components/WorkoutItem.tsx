import { View, Text, Switch, StyleSheet, Pressable, } from "react-native";
import { globalStyles } from "../styles/globalStyles";

type WorkoutItemProps = {
    title: string;
    startCountDown: number;
    activeTime: number;
    restTime: number;
    numberOfIntervals: number;
    numberOfSets: number;
    setRest: number;
}

const WorkoutItem: React.FC<WorkoutItemProps> = ({ title, startCountDown, activeTime, restTime, numberOfIntervals, numberOfSets, setRest }) => {
  return (
    <View style={globalStyles.container}>
    <Pressable>
      <View style={styles.item}>
        <Text style={globalStyles.h2}>{title}</Text>
        <View style={styles.flexContainer}>
          <View style={styles.textContainer}>
            <Text style={globalStyles.h3}>
              Start Countdown: {startCountDown}
            </Text>
            <Text style={globalStyles.h3}>Active Time: {activeTime}</Text>
            <Text style={globalStyles.h3}>Rest Time: {restTime}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={globalStyles.h3}>
              Intervals: {numberOfIntervals}
            </Text>
            <Text style={globalStyles.h3}>Sets: {numberOfSets}</Text>
            <Text style={globalStyles.h3}>Set Rest: {setRest}</Text>
          </View>
        </View>
      </View>
    </Pressable>
    </View>
  );
}

export default WorkoutItem;

const styles = StyleSheet.create({
    item: {
        
        width: "95%",
        backgroundColor: "lightgray",
        padding: 10,
        
    },
    flexContainer: {
        flexDirection: "row",
    },
    textContainer: {
        width: "45%",
    },


})