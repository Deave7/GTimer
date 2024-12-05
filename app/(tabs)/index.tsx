import { View, Text, TextInput,  Pressable, StyleSheet, Button } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { useRouter } from 'expo-router';




export default function Tab() {

  const router = useRouter();
  return (
    <View style={globalStyles.container}>
      <View style={styles.inputContainer}>
        <Text>Starting Countdown</Text>
        <TextInput style={styles.inputStyle} placeholder="Enter time in seconds" />
      </View>
      <View style={styles.inputContainer}>
        <Text>Interval Time</Text>
        <TextInput style={styles.inputStyle} placeholder="Enter time in seconds" />
      </View>
      <View style={styles.inputContainer}>
        <Text>Interval Rest</Text>
        <TextInput style={styles.inputStyle} placeholder="Enter time in seconds" />
      </View>
      <View style={styles.inputContainer}>
        <Text>Number of intervals</Text>
        <TextInput style={styles.inputStyle} placeholder="Enter time in seconds" />
      </View >
      <View style={styles.inputContainer}>
        <Text>Sets</Text>
        <TextInput style={styles.inputStyle} placeholder="Enter time in seconds" />
      </View >
      <View style={styles.inputContainer}>
        <Text>Set Rest</Text>
        <TextInput style={styles.inputStyle} placeholder="Enter time in seconds" />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={globalStyles.baseButton} onPress={() => router.push("/modal")}>
            <Text>Start</Text>
        </Pressable>
        <Pressable style={globalStyles.baseButton}>
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