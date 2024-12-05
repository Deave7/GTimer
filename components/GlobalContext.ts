import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Workout = {
    title: string;
    startCountDown: number;
    activeTime: number;
    restTime: number;
    numberOfIntervals: number;
    numberOfSets: number;
    setRest: number;
};

export type GlobalContextType = {
    workouts: Workout[];
    currentWorkout: Workout | null;
    setCurrentWorkout: (workout: Workout) => void;
    setWorkouts: (workouts: Workout[]) => void;
};

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

