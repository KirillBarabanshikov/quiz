import { FC, useState } from 'react';
import { clsx } from 'clsx';
import { useQuizStore } from '@/features/quiz';
import { ITour } from '@/features/quiz/types/types.ts';
import { FinishButton } from '@/features/quiz/ui';
import { Button, Container } from '@/shared/ui';
import { Letter } from './ui';
import styles from '../Quiz.module.scss';

interface IConstructor {
  tour: ITour;
}

export const Constructor: FC<IConstructor> = ({ tour }) => {
  const { currentTour } = useQuizStore();
  const [isStarted, setIsStarted] = useState(false);

  if (isStarted) return <Letter />;

  return (
    <div className={styles.wrapper}>
      <Container className={clsx(styles.container, styles.constructor)}>
        <span className={styles.badge}>{currentTour + 1} тур</span>
        <p className={styles.subtitle}>{tour.subtitle}</p>
        <h2>{tour.questions[0].question}</h2>
      </Container>
      <div className={styles.actions}>
        <FinishButton />
        <Button text={'Собрать письмо'} onClick={() => setIsStarted(true)} />
      </div>
    </div>
  );
};
