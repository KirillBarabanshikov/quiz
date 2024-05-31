import { FinishTrigger } from '@/features/quiz/Quiz/ui';
import { Button, Container } from '@/shared/ui';
import { IDescription } from '@/features/quiz/Quiz/types/types.ts';
import { FC } from 'react';
import styles from '../../../../Quiz.module.scss';
import { useQuizStore } from '@/features/quiz';

interface IFlagDescription {
  description: IDescription;
}

export const FlagDescription: FC<IFlagDescription> = ({ description }) => {
  const { currentTour, setTour } = useQuizStore();

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.row} ${styles.flag}`}>
        <Container theme={'gradient'} className={styles.left}>
          <div className={styles.flag_img}>
            <img src={description.image} />
          </div>
        </Container>
        <Container theme={'blue'} className={styles.right}>
          <h3>{description.title}</h3>
          <p>{description.description}</p>
        </Container>
      </div>
      <div className={styles.actions}>
        <FinishTrigger />
        <Button text={'Далее'} onClick={() => setTour(currentTour + 1)} />
      </div>
    </div>
  );
};
