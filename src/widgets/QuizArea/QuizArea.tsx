import { Button, Container } from '@/shared/ui';
import { Quiz, useQuizStore } from '@/features/quiz';
import Logo2 from '@/shared/assets/icons/logo_2.svg?react';
import Logo1 from '@/shared/assets/icons/logo_1.svg?react';
import Ship from '@/shared/assets/icons/ship.svg?react';
import Compass from '@/shared/assets/icons/compass.svg?react';
import SteeringWheel from '@/shared/assets/icons/steeringWheel.svg?react';
import styles from './QuizArea.module.scss';

export const QuizArea = () => {
  const { isStarted, start } = useQuizStore();

  if (isStarted) {
    return <Quiz />;
  }

  return (
    <div className={styles.container}>
      <Container className={styles.head} theme={'blue'} direction={'row'}>
        <div className={styles.logo}>
          <Logo2 />
          <span>
            Дубенский районный <br />
            краеведческий музей
          </span>
        </div>
        <Logo1 />
      </Container>
      <Container className={styles.quiz} theme={'gradient'}>
        <h1>Квиз для старшеклассников «Умная морская душа»</h1>
        <Button text={'Начать'} theme={'white'} maxWidth={'290px'} onClick={start} />
      </Container>
      <div className={styles.info}>
        <Container className={styles.ship} theme={'blue'}>
          <Ship />
        </Container>
        <div className={styles.adventure}>
          <Container className={styles.item} theme={'blue'}>
            <div className={styles.box}>
              <Compass />
              <span>
                7 захватывающих
                <br />
                этапов
              </span>
            </div>
          </Container>
          <Container className={styles.item} theme={'blue'}>
            <div className={styles.box}>
              <SteeringWheel />
              <span>Отправься в увлекательное путешествие по загадочным глубинам знаний</span>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};
