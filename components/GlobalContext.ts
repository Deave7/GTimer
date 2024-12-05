import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Workout = {
    title?: string;
    startCountdown: number;
    activeTime: number;
    restTime: number;
    numberOfIntervals: number;
    numberOfSets: number;
    setRest: number;
};

export type GlobalContext = {
    workouts: Workout[];
    currentWorkout: Workout | null;
    setCurrentWorkout: (workout: Workout) => void;
    setWorkouts: (workouts: Workout[]) => void;
};

export const initialGlobalState: GlobalContext = {
    workouts: [],
    currentWorkout: null,
    setCurrentWorkout: () => {},
    setWorkouts: () => {},
}

export const GlobalContext = createContext<GlobalContext>(initialGlobalState);
