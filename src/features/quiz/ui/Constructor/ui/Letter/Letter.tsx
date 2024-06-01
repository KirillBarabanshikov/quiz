import { clsx } from 'clsx';
import { useQuizStore } from '@/features/quiz';
import { Button, Container } from '@/shared/ui';
import { FinishButton } from '@/features/quiz/ui';
import styles from '../../../Quiz.module.scss';
import s from './Letter.module.scss';

export const Letter = () => {
  const { currentTour } = useQuizStore();

  return (
    <div className={clsx(styles.wrapper, s.letter)}>
      <Container className={clsx(styles.container, s.top)}>
        <span className={styles.badge}>{currentTour + 1} тур</span>
        <h2>Расположите части письма так, чтобы получился логически связанный текст</h2>
      </Container>
      <Container className={styles.container}></Container>
      <div className={styles.actions}>
        <FinishButton />
        <Button text={'Далее'} />
      </div>
    </div>
  );
};
