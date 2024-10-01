import { create } from "zustand";

export interface CounterState {
    count: number;
    incrementBy: (value: number) => void;
}
export const useCounterStore = create<CounterState>()( (set, get) => ({
    count: 0,
    incrementBy: (value: number) => {
        //Otra manera de hacerlo:
        // set({ count: get().count + value });
        set(state => ({ count: state.count + value }));
    },
}))