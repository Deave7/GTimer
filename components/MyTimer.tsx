import { View, Text, Pressable, StyleSheet } from "react-native";
import { useTimer } from "react-timer-hook";
import { globalStyles } from "../styles/globalStyles";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function MyTimer({ expiryTimestamp }: { expiryTimestamp: Date; }) {
  const router = useRouter();
  const [remainingSeconds, setRemainingSeconds] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
    autoStart: true,
  });

  const handlePause = () => {
    pause();
    setIsPaused(true);
    const remainingSeconds = minutes * 60 + seconds;
    setRemainingSeconds(remainingSeconds);
  }

  const handleResume = () => {
    if (remainingSeconds !== null) {
        const newExpiryTimestamp = new Date();
        newExpiryTimestamp.setSeconds(newExpiryTimestamp.getSeconds() + remainingSeconds);
        setIsPaused(false);
        restart(newExpiryTimestamp);
  }}

  return (
    <View style={globalStyles.container}>
      <View style={styles.timerContainer}>
        <Text>Prepare / Active / Rest / total remaining time</Text>
        <Text style={styles.timerText}>
          {minutes}:{seconds}
        </Text>
      </View>
      <View style={styles.intervalList}>
        <Text>1. Countdown: 10</Text>
        <Text>2. Active: 60</Text>
        <Text>3. Rest: 60</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={globalStyles.baseButton} onPress={() => restart(expiryTimestamp)}>
          <Text>Restart</Text>
        </Pressable>
        {isPaused ? (
            <Pressable style={globalStyles.baseButton} onPress={handleResume}>
                <Text>Resume</Text>
            </Pressable>
        ):(
            <Pressable style={globalStyles.baseButton} onPress={handlePause}>
                <Text>Pause</Text>
            </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  timerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    margin: 10,
  },
  timerText: {
    fontSize: 100,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 30,
  },
  intervalList: {

  },
});
