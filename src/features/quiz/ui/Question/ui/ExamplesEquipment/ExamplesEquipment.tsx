import { useQuizStore } from '@/features/quiz';
import { Container } from '@/shared/ui';
import example1 from './assets/example1.png';
import example2 from './assets/example2.png';
import example3 from './assets/example3.png';
import example4 from './assets/example4.png';
import example5 from './assets/example5.png';
import example6 from './assets/example6.png';
import styles from './ExamplesEquipment.module.scss';

const examples = [
  { name: 'Градшток', image: example1 },
  { name: 'Квадрант', image: example2 },
  { name: 'Секстан', image: example3 },
  { name: 'Солнечные часы', image: example4 },
  { name: 'Лаг', image: example5 },
  { name: 'Кабестан', image: example6 },
];
export const ExamplesEquipment = () => {
  const { nextTour } = useQuizStore();

  return (
    <div onClick={nextTour} className={styles.wrapper}>
      <Container className={styles.head}>
        <h2>Примеры оснастки и снаряжения</h2>
      </Container>
      {examples.map(({ name, image }) => (
        <Container key={name} theme={'blue'} className={styles.example}>
          <div key={name} className={styles.image}>
            <img src={image} />
          </div>
          <p>{name}</p>
        </Container>
      ))}
    </div>
  );
};
