import { FC } from 'react';
import { Button, Container } from '@/shared/ui';
import styles from '../../Quiz.module.scss';
import { useQuizStore } from '@/features/quiz';
import trophy from '@/shared/assets/images/trophy.png';
import medal from '@/shared/assets/images/medal.png';
import dislike from '@/shared/assets/images/dislike.png';
import { FinishTrgger } from '@/features/quiz/Quiz/ui';

const results = [
  { image: trophy, title: 'Вы справились отлично!' },
  { image: medal, title: 'Хороший результат' },
  { image: dislike, title: 'Не сдавайся!' },
];

interface ITourResult {
  questionsCount: number;
  correctAnswers: number;
}

export const TourResult: FC<ITourResult> = ({ questionsCount, correctAnswers }) => {
  const { currentTour, setTour } = useQuizStore();
  let result = 0;

  if (correctAnswers <= questionsCount - 7) {
    result = 2;
  } else if (correctAnswers <= questionsCount - 2) {
    result = 1;
  }

  return (
    <div className={styles.wrapper}>
      <Container className={`${styles.container} ${styles.result}`}>
        <span className={styles.badge}>{currentTour + 1} тур</span>
        <div className={styles.img_area}>
          <img src={results[result].image} />
        </div>
        <h2>{results[result].title}</h2>
        <p>
          Вы ответили правильно на {correctAnswers} / {questionsCount} вопросов
        </p>
      </Container>
      <div className={styles.actions}>
        <FinishTrgger />
        <Button text={'Продолжить квиз'} onClick={() => setTour(currentTour + 1)} />
      </div>
    </div>
  );
};
