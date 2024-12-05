import { View, FlatList, StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import WorkoutItem from '../../components/WorkoutItem';

const workoutData = [
  { id: '1', title: 'Example 1', startCountDown: 10, activeTime: 120, restTime: 30, numberOfIntervals: 2, numberOfSets: 2, setRest: 60 },
  { id: '2', title: 'Example 2', startCountDown: 10, activeTime: 120, restTime: 30, numberOfIntervals: 2, numberOfSets: 2, setRest: 60 },
  { id: '3', title: 'Example 3', startCountDown: 10, activeTime: 120, restTime: 30, numberOfIntervals: 2, numberOfSets: 2, setRest: 60 },
  { id: '4', title: 'Example 4', startCountDown: 10, activeTime: 120, restTime: 30, numberOfIntervals: 2, numberOfSets: 2, setRest: 60 },
  { id: '5', title: 'Example 5', startCountDown: 10, activeTime: 120, restTime: 30, numberOfIntervals: 2, numberOfSets: 2, setRest: 60 },
  { id: '6', title: 'Example 6', startCountDown: 10, activeTime: 120, restTime: 30, numberOfIntervals: 2, numberOfSets: 2, setRest: 60 },
  { id: '7', title: 'Example 7', startCountDown: 10, activeTime: 120, restTime: 30, numberOfIntervals: 2, numberOfSets: 2, setRest: 60 },
];

export default function Tab() {
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={workoutData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <WorkoutItem
            title={item.title}
            startCountDown={item.startCountDown}
            activeTime={item.activeTime}
            restTime={item.restTime}
            numberOfIntervals={item.numberOfIntervals}
            numberOfSets={item.numberOfSets}
            setRest={item.setRest}
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 50, 
    gap: 15,
  },
});
