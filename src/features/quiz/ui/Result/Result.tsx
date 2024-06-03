import { FC } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { Button, Container } from '@/shared/ui';
import { FinishButton } from '@/features/quiz/ui';
import { useQuizStore } from '@/features/quiz';
import trophy from '@/shared/assets/images/trophy.png';
import medal from '@/shared/assets/images/medal.png';
import dislike from '@/shared/assets/images/dislike.png';
import styles from '../Quiz.module.scss';

const results = [
  { image: trophy, title: 'Вы справились отлично!' },
  { image: medal, title: 'Хороший результат' },
  { image: dislike, title: 'Не сдавайся!' },
];

const computeResult = (answersNumber: number, questionsNumber: number) => {
  const incorrectAnswers = questionsNumber - answersNumber;
  if (incorrectAnswers > 6) {
    return 2;
  } else if (incorrectAnswers > 1) {
    return 1;
  } else {
    return 0;
  }
};

interface IResult {
  isLast?: boolean;
  questionsNumber: number;
}

export const Result: FC<IResult> = ({ isLast = false, questionsNumber }) => {
  const { currentTour, nextTour, correctAnswers } = useQuizStore();
  const answersNumber =
    correctAnswers[currentTour] ?? correctAnswers.reduce((total, current) => total + current, 0);
  const result = computeResult(answersNumber, questionsNumber);

  return (
    <div className={styles.wrapper}>
      <Container className={clsx(styles.container, styles.result)}>
        {!isLast && <span className={styles.badge}>{currentTour + 1} тур</span>}
        <div className={styles.image}>
          <img src={results[result].image} />
        </div>
        <h2>{results[result].title}</h2>
        <p>
          Вы ответили правильно на {answersNumber} / {questionsNumber} вопросов
        </p>
      </Container>
      <motion.div
        initial={{ opacity: isLast ? 0 : 1 }}
        animate={{ opacity: 1 }}
        className={styles.actions}
      >
        <FinishButton isLast={isLast} />
        {!isLast && <Button text={'Далее'} onClick={nextTour} />}
      </motion.div>
    </div>
  );
};
