import { FC } from 'react';
import { Button, Container } from '@/shared/ui';
import { useQuizStore } from '@/features/quiz';
import styles from '../../Quiz.module.scss';
import { FinishTrgger } from '@/features/quiz/Quiz/ui';

interface ITourPreview {
  name: string;
  onStart: () => void;
}

export const TourPreview: FC<ITourPreview> = ({ name, onStart }) => {
  const { currentTour } = useQuizStore();

  return (
    <div className={styles.wrapper}>
      <Container className={`${styles.container} ${styles.tour}`}>
        <p>{currentTour + 1} тур</p>
        <h2>{name}</h2>
      </Container>
      <div className={styles.actions}>
        <FinishTrgger />
        <Button text={'Начать'} onClick={onStart} />
      </div>
    </div>
  );
};
