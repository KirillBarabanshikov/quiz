import styles from './FlagDescription.module.scss';
import { FinishButton } from '@/features/quiz/ui';
import { Button, Container } from '@/shared/ui';
import { useQuizStore } from '@/features/quiz';
import mainFlag from '@/shared/assets/images/main_flag.png';

export const FlagDescription = () => {
  const { nextTour } = useQuizStore();

  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <Container theme={'gradient'} className={styles.left}>
          <img src={mainFlag} />
        </Container>
        <Container theme={'blue'} className={styles.right}>
          <h2>Андреевский флаг</h2>
          <p>
            Андреевский флаг является главным корабельным кормовым флагом Российского Флота. Он
            представляет собой белое полотнище, пересечённое по диагонали двумя синими полосами,
            которые образуют наклонный крест, который называется Андреевским. Этот крест и дал имя
            флагу.
          </p>
        </Container>
      </div>
      <div className={styles.actions}>
        <FinishButton />
        <Button text={'Далее'} onClick={nextTour} />
      </div>
    </div>
  );
};
