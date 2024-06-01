export interface ITour {
  name: string;
  subtitle?: string;
  questions: IQuestion[];
}

export interface IQuestion {
  question: string;
  image?: string;
  options: string[];
  answers: string[];
  description?: IDescription;
}

export interface IDescription {
  title: string;
  description: string;
}
