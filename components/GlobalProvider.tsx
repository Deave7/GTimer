import { useState } from "react";
import { GlobalContext, Setting, Workout } from "./GlobalContext";

type GlobalProviderProps = {
    children: React.ReactNode;
    };

function GlobalProvider({ children }: GlobalProviderProps) {
    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const [currentWorkout, setCurrentWorkout] = useState<Workout | null>(null);
    const [settings, setSettings] = useState<Setting[]>([]);
    return (
        <GlobalContext.Provider value={{ workouts, currentWorkout, settings, setCurrentWorkout, setWorkouts, setSettings }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;