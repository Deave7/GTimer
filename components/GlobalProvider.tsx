import { useState } from "react";
import { GlobalContext, Workout } from "./GlobalContext";

type GlobalProviderProps = {
    children: React.ReactNode;
    };

function GlobalProvider({ children }: GlobalProviderProps) {
    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const [currentWorkout, setCurrentWorkout] = useState<Workout | null>(null);
    return (
        <GlobalContext.Provider value={{ workouts, currentWorkout, setCurrentWorkout, setWorkouts }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;