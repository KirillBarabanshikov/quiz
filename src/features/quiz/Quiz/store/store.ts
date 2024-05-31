import { create } from 'zustand';

interface IQuizState {
  isStarted: boolean;
  currentTour: number;
  currentQuestion: number;
  correctAnswers: number;
  setTour: (tour: number) => void;
  setQuestion: (question: number) => void;
  start: () => void;
  finish: () => void;
}

export const useQuizStore = create<IQuizState>((set) => ({
  isStarted: false,
  currentTour: 0,
  currentQuestion: 0,
  correctAnswers: 0,
  setTour: (tour: number) => set(() => ({ currentTour: tour })),
  setQuestion: (question: number) => set(() => ({ currentQuestion: question })),
  start: () => set(() => ({ isStarted: true })),
  finish: () => set(() => ({ isStarted: false, currentTour: 0, currentQuestion: 0 })),
}));
