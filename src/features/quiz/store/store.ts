import { create } from 'zustand';

interface IQuizState {
  isStarted: boolean;
  isStartedTour: boolean;
  currentTour: number;
  currentQuestion: number;
  correctAnswers: string[][];
  startTour: () => void;
  nextTour: () => void;
  setQuestion: (question: number) => void;
  setCorrectAnswers: (answer: string) => void;
  start: () => void;
  finish: () => void;
}

export const useQuizStore = create<IQuizState>((set) => ({
  isStarted: false,
  isStartedTour: false,
  currentTour: 0,
  currentQuestion: 0,
  correctAnswers: [],
  startTour: () => set(() => ({ isStartedTour: true })),
  nextTour: () =>
    set((state) => ({
      currentQuestion: 0,
      currentTour: state.currentTour + 1,
      isStartedTour: false,
    })),
  setQuestion: (question: number) => set(() => ({ currentQuestion: question })),
  setCorrectAnswers: (answer: string) =>
    set((state) => {
      const updatedCorrectAnswers =
        state.correctAnswers.length > state.currentTour
          ? state.correctAnswers
          : [
              ...state.correctAnswers,
              ...Array(state.currentTour - state.correctAnswers.length + 1).fill([]),
            ];

      updatedCorrectAnswers[state.currentTour] = updatedCorrectAnswers[state.currentTour]
        ? [...updatedCorrectAnswers[state.currentTour], answer]
        : [answer];

      return { correctAnswers: updatedCorrectAnswers };
    }),
  start: () => set(() => ({ isStarted: true })),
  finish: () =>
    set(() => ({
      isStarted: false,
      isStartedTour: false,
      currentTour: 0,
      currentQuestion: 0,
      correctAnswers: [],
    })),
}));
