import { View, Text, StyleSheet, Pressable } from "react-native";
import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "@/components/GlobalContext";
import { globalStyles } from "../styles/globalStyles";
import { useTimer } from "react-timer-hook";

export default function ModalScreen() {
  const { currentWorkout } = useContext(GlobalContext);

  if (!currentWorkout) {
    return (
      <View style={globalStyles.container}>
        <Text>No workout selected.</Text>
      </View>
    );
  }

  const { startCountdown, activeTime, restTime, numberOfIntervals, numberOfSets, setRest } = currentWorkout;
  const [stage, setStage] = useState<'active' | 'rest' | 'startCountdown' | 'setRest' | 'completed'>('startCountdown');
  const [intervalCount, setIntervalCount] = useState<number>(1);
  const [setCount, setSetCount] = useState<number>(1);
  const [showStage, setShowStage] = useState<boolean>(true);

  const time = new Date();
  time.setSeconds(time.getSeconds() + startCountdown);

  const { seconds, minutes, isRunning, restart, pause } = useTimer({
    expiryTimestamp: time,
    onExpire: () => handleStageTransition(),
    autoStart: true,
  });

  const restartTimer = (duration: number) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + duration);
    setTimeout(() => {
      restart(time, true);
    }, 1);
  };

  const calculateTotalRemainingTime = () => {
    const stagesLeft =
      (numberOfSets - setCount) * (numberOfIntervals * (activeTime + restTime) + setRest) +
      (numberOfIntervals - intervalCount) * (activeTime + restTime);

    switch (stage) {
      case "startCountdown":
        return startCountdown + stagesLeft;
      case "active":
        return activeTime + stagesLeft + seconds;
      case "rest":
        return restTime + stagesLeft + seconds;
      case "setRest":
        return setRest + stagesLeft + seconds;
      case "completed":
        return 0;
      default:
        return 0;
    }
  };

  const totalRemainingTime = calculateTotalRemainingTime();

  const formatTime = (timeInSeconds: number) => {
    const mins = Math.floor(timeInSeconds / 60);
    const secs = timeInSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleStageTransition = () => {
    setShowStage(true);
    switch (stage) {
      case "startCountdown":
        setStage("active");
        restartTimer(activeTime);
        break;
      case "active":
        if (intervalCount < numberOfIntervals) {
          setStage("rest");
          setIntervalCount(intervalCount + 1);
          restartTimer(restTime);
        } else if (setCount < numberOfSets) {
          setStage("setRest");
          setSetCount(setCount + 1);
          setIntervalCount(1);
          restartTimer(setRest);
        } else {
          setStage("completed");
        }
        break;
      case "rest":
        setStage("active");
        restartTimer(activeTime);
        break;
      case "setRest":
        setStage("active");
        restartTimer(activeTime);
        break;
      case "completed":
        setStage("completed");
        break;
    }
  };

  useEffect(() => {
    if (showStage) {
      const timer = setTimeout(() => {
        setShowStage(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [stage, showStage]);

  return (
    <View style={styles.container}>
      <View style={styles.timerContainer}>
        {showStage ? (
          <Text style={styles.stageText}>
            {stage === "startCountdown" && "Prepare"}
            {stage === "active" && "Active"}
            {stage === "rest" && "Rest"}
            {stage === "setRest" && "Set Rest"}
            {stage === "completed" && "Workout Completed"}
          </Text>
        ) : (
          <Text style={styles.stageText}>{formatTime(totalRemainingTime)}</Text>
        )}
        <Text style={styles.timerText}>
          {minutes}:{seconds.toString().padStart(2, "0")}
        </Text>
      </View>
      <View style={styles.intervalList}>
        <Text style={styles.detailsText}>
          Interval: {intervalCount}/{numberOfIntervals}
        </Text>
        <Text>1. Countdown: 10</Text>
        <Text>2. Active: 60</Text>
        <Text>3. Rest: 60</Text>
      </View>
      <View style={styles.buttonContainer}>
        {isRunning ? (
          <Pressable style={globalStyles.baseButton} onPress={pause}>
            <Text>Pause</Text>
          </Pressable>
        ) : (
          <Pressable style={globalStyles.baseButton} onPress={() => restartTimer(seconds)}>
            <Text>Resume</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  timerContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
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
  intervalList: {},
  detailsText: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 20,
  },
  stageText: {
    fontSize: 40,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
