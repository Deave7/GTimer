import { View, Text, TextInput,  Pressable, StyleSheet, Button } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { useRouter } from 'expo-router';
import { useContext, useState } from 'react';
import { GlobalContext } from '@/components/GlobalContext';




export default function Tab() {
  const { workouts, setCurrentWorkout, setWorkouts } = useContext(GlobalContext);
  const router = useRouter();
  
  const handleStartPress = () => {
    const newWorkout = {
      startCountdown: parseInt(startCountdown),
      activeTime: parseInt(activeTime),
      restTime: parseInt(restTime),
      numberOfIntervals: parseInt(numberOfIntervals),
      numberOfSets: parseInt(numberOfSets),
      setRest: parseInt(setRest),
    };
    setCurrentWorkout(newWorkout);
    console.log(newWorkout);
    router.push("/modal")
  };

  const handleSavePress = () => {
    const newWorkout = {
      startCountdown: parseInt(startCountdown),
      activeTime: parseInt(activeTime),
      restTime: parseInt(restTime),
      numberOfIntervals: parseInt(numberOfIntervals),
      numberOfSets: parseInt(numberOfSets),
      setRest: parseInt(setRest),
    };
    setWorkouts([...workouts, newWorkout]);
  }

  const [startCountdown, setStartCountdown] = useState<string>('');
  const [activeTime, setActiveTime] = useState<string>('');
  const [restTime, setRestTime] = useState<string>('');
  const [numberOfIntervals, setNumberOfIntervals] = useState<string>('');
  const [numberOfSets, setNumberOfSets] = useState<string>('');
  const [setRest, setSetRest] = useState<string>('');
  return (
    <View style={globalStyles.container}>
      <View style={styles.inputContainer}>
        <Text>Starting Countdown</Text>
        <TextInput style={styles.inputStyle} placeholder="Enter time in seconds" onChangeText={setStartCountdown} />
      </View>
      <View style={styles.inputContainer}>
        <Text>Interval Time</Text>
        <TextInput style={styles.inputStyle} placeholder="Enter time in seconds" onChangeText={setActiveTime}/>
      </View>
      <View style={styles.inputContainer}>
        <Text>Interval Rest</Text>
        <TextInput style={styles.inputStyle} placeholder="Enter rest in seconds" onChangeText={setRestTime}/>
      </View>
      <View style={styles.inputContainer}>
        <Text>Number of intervals</Text>
        <TextInput style={styles.inputStyle} placeholder="Enter the number of intervals" onChangeText={setNumberOfIntervals} />
      </View >
      <View style={styles.inputContainer}>
        <Text>Sets</Text>
        <TextInput style={styles.inputStyle} placeholder="Enter the number of sets" onChangeText={setNumberOfSets}/>
      </View >
      <View style={styles.inputContainer}>
        <Text>Set Rest</Text>
        <TextInput style={styles.inputStyle} placeholder="Enter rest in seconds" onChangeText={setSetRest}/>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={globalStyles.baseButton} onPress={handleStartPress}>
            <Text>Start</Text>
        </Pressable>
        <Pressable style={globalStyles.baseButton} onPress={handleSavePress}>
            <Text>Save Workout</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 30,
    },
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',    
        gap: 10,
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        width: '90%',
    },
    inputStyle: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    
});