export interface ITour {
  name: string;
  questions: IQuestion[];
}

export interface IQuestion {
  question: string;
  options: string[];
  answer: string[];
}
