import { FC } from 'react';
import { Button, Container } from '@/shared/ui';
import { useQuizStore } from '@/features/quiz';
import styles from '../../Quiz.module.scss';
import heart from '@/shared/assets/images/heart.png';

export const FinishQuiz: FC = () => {
  const { finish } = useQuizStore();

  return (
    <div className={styles.wrapper}>
      <Container className={`${styles.container} ${styles.finish}`}>
        <div className={styles.img_area}>
          <img src={heart} />
        </div>
        <h2>Спасибо за участие в нашем квизе!</h2>
        <p>Надеемся, вам понравилось. Отличная работа!</p>
      </Container>
      <Button text={'На главную'} onClick={finish} />
    </div>
  );
};
