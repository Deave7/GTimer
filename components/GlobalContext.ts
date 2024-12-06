import { createContext } from 'react';

export type Workout = {
    id?: string;
    title?: string;
    startCountdown: number;
    activeTime: number;
    restTime: number;
    numberOfIntervals: number;
    numberOfSets: number;
    setRest: number;
};

export type Setting = {
    key: string,
    value: boolean
}

export type GlobalContext = {
    workouts: Workout[];
    currentWorkout: Workout | null;
    settings: Setting[];
    setCurrentWorkout: (workout: Workout) => void;
    setWorkouts: (workouts: Workout[]) => void;
    setSettings: (settings: Setting[]) => void;
};

export const initialGlobalState: GlobalContext = {
    workouts: [],
    currentWorkout: null,
    settings: [
        { key: 'minuteToggle', value: false },
        { key: 'skipLastRestToggle', value: false },
        { key: 'skipRestBeforeSetRestToggle', value: false },
    ],
    setCurrentWorkout: () => {},
    setWorkouts: () => {},
    setSettings: () => {},
}

export const GlobalContext = createContext<GlobalContext>(initialGlobalState);
