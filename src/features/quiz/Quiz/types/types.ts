export interface ITour {
  name: string;
  questions: IQuestion[];
}

export interface IQuestion {
  question: string;
  image?: string;
  options: string[];
  answer: string[];
  description?: IDescription;
  type: QuestionType;
}

export type QuestionType = 'single' | 'multiple' | 'blank' | 'constructor' | 'single-image';

export interface IDescription {
  title: string;
  description: string;
  image?: string;
}
