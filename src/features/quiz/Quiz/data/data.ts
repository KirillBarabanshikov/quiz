import { ITour } from '../types/types.ts';

export const tours: ITour[] = [
  {
    name: 'Викторина',
    questions: [
      {
        question: 'Как называется трехмачтовый\nбоевой корабль, у которого\nмного пушек?',
        options: ['Фрегат', 'Линкор', 'Бот', 'Корвет'],
        answer: ['Фрегат'],
      },
      {
        question: 'Как называется парусное\nсудно с двумя и более\nмачтами и косыми парусами?',
        options: ['бриг', 'Барк', 'Шхуна', 'бригантина'],
        answer: ['Шхуна'],
      },
      {
        question: 'Как называется помещение\nдля приготовления пищи\nна морском судне?',
        options: ['Рубка', 'Камбуз', 'Гальюн', 'Каюта'],
        answer: ['Камбуз'],
      },
    ],
  },
  {
    name: 'Загадки',
    questions: [
      {
        question: 'Зачерпнуло ветра белое крыло нас с тобой кататься в море унесло',
        options: ['облако', 'Парус', 'дым парохода', 'льдина'],
        answer: ['Парус'],
      },
      {
        question: 'Кругом вода, а с питьем беда. Кто знает, где это бывает?',
        options: ['Река', 'Ручей', 'Стакан', 'Море'],
        answer: ['Море'],
      },
    ],
  },
];
