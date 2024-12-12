import { View, Text, Pressable, StyleSheet } from "react-native";
import { globalStyles } from "../styles/globalStyles";

type WorkoutItemProps = {
  id: string; 
  title: string;
  startCountDown: number;
  activeTime: number;
  restTime: number;
  numberOfIntervals: number;
  numberOfSets: number;
  setRest: number;
  onStart: (id: string) => void; 
  onDelete: (id: string) => void; 
};

const WorkoutItem: React.FC<WorkoutItemProps> = ({
  id,
  title,
  startCountDown,
  activeTime,
  restTime,
  numberOfIntervals,
  numberOfSets,
  setRest,
  onStart,
  onDelete,
}) => {
  return (
    <View style={[globalStyles.container, styles.item]}>
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
          <Text style={globalStyles.h3}>Intervals: {numberOfIntervals}</Text>
          <Text style={globalStyles.h3}>Sets: {numberOfSets}</Text>
          <Text style={globalStyles.h3}>Set Rest: {setRest}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[globalStyles.baseButton, styles.startButton]}
          onPress={() => onStart(id)}
        >
          <Text style={globalStyles.h3}>Start</Text>
        </Pressable>
      
        <Pressable
          style={[globalStyles.baseButton, styles.deleteButton]}
          onPress={() => onDelete(id)}
        >
          <Text style={globalStyles.h3}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WorkoutItem;

const styles = StyleSheet.create({
  item: {
    width: "95%",
    backgroundColor: "lightgray",
    padding: 25,
    borderRadius: 5,
    marginBottom: 15,
  
  },
  flexContainer: {
    flexDirection: "row",
    gap: 10,
  },
  textContainer: {
    width: "45%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    gap: 50,
  },
  startButton: {
    backgroundColor: "#a6ff4c",
    
  },
  deleteButton: {
    backgroundColor: "#ee5e68",
  },
});