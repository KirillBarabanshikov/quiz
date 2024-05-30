import { FC } from 'react';
import { Button, Container } from '@/shared/ui';
import { useQuizStore } from '@/features/quiz';
import styles from '../../Quiz.module.scss';
import { motion } from 'framer-motion';

interface ITourPreview {
  name: string;
  onStart: () => void;
}

export const TourPreview: FC<ITourPreview> = ({ name, onStart }) => {
  const { currentTour, finish } = useQuizStore();

  function onFinish() {
    if (currentTour === 0) {
      finish();
    }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.wrapper}>
      <Container className={`${styles.container} ${styles.tour}`}>
        <p>{currentTour + 1} тур</p>
        <h2>{name}</h2>
      </Container>
      <div className={styles.actions}>
        <Button text={'На главную'} onClick={onFinish} />
        <Button text={'Начать'} onClick={onStart} />
      </div>
    </motion.div>
  );
};
