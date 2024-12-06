import { View, FlatList, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import WorkoutItem from "../../components/WorkoutItem";
import { useContext } from "react";
import { GlobalContext, Workout } from "../../components/GlobalContext";
import { router } from "expo-router";

export default function Tab() {
  const { workouts, setWorkouts, setCurrentWorkout } = useContext(GlobalContext);

  const handleStartWorkout = (id: string) => {
    const workout = workouts.find((workout: Workout) => workout.id === id);
    if (workout) {
      setCurrentWorkout(workout);
      router.push("/modal");
    }
  };

  const handleDeleteWorkout = (id: string) => {
    setWorkouts(workouts.filter((workout: Workout) => workout.id !== id));
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={workouts}
        keyExtractor={(item, index) => item.id || index.toString()}
        renderItem={({ item }) => (
          <WorkoutItem
            id={item.id || ""}
            title={item.title || "Untitled"}
            startCountDown={item.startCountdown}
            activeTime={item.activeTime}
            restTime={item.restTime}
            numberOfIntervals={item.numberOfIntervals}
            numberOfSets={item.numberOfSets}
            setRest={item.setRest}
            onStart={handleStartWorkout} 
            onDelete={handleDeleteWorkout} 
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 20,
    gap: 15,
  },
});
