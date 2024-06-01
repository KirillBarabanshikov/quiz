import { FC } from 'react';
import { motion } from 'framer-motion';
import { useQuizStore } from '@/features/quiz';
import { Button, Container } from '@/shared/ui';
import styles from '../../../Quiz.module.scss';
import { FinishButton } from '../../../index.ts';

interface IPreview {
  name: string;
  onNext: () => void;
}

export const Preview: FC<IPreview> = ({ name, onNext }) => {
  const { currentTour } = useQuizStore();

  return (
    <div className={styles.wrapper}>
      <Container className={`${styles.container} ${styles.preview}`}>
        <p>{currentTour + 1} тур</p>
        <h2>{name}</h2>
      </Container>
      <motion.div
        initial={{ opacity: currentTour === 0 ? 0 : 1 }}
        animate={{ opacity: 1 }}
        className={styles.actions}
      >
        <FinishButton />
        <Button text={'Начать'} onClick={onNext} />
      </motion.div>
    </div>
  );
};
