import { FC, useEffect, useState } from 'react';
import { IQuestion as InterfaceQuestion } from '../../types/types.ts';
import { Button, Container } from '@/shared/ui';
import { useQuizStore } from '@/features/quiz/Quiz/store/store.ts';
import { OptionButton } from '@/features/quiz/Quiz/ui/OptionButton/OptionButton.tsx';
import styles from '../../Quiz.module.scss';

interface IQuestion {
  question: InterfaceQuestion;
  questionsCount: number;
}

export const Question: FC<IQuestion> = ({ question, questionsCount }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const { currentQuestion, setQuestion, setTour, currentTour } = useQuizStore();

  useEffect(() => {
    setSelectedOptions([]);
  }, [question]);

  function onSelect(option: string) {
    setSelectedOptions((prevState) => [...prevState, option]);
  }

  if (currentQuestion > questionsCount - 1) {
    return (
      <div>
        result
        <Button text={'Продолжить квиз'} onClick={() => setTour(currentTour + 1)} />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <Container className={`${styles.container} ${styles.question}`}>
        <span className={styles.badge}>{currentTour + 1} тур</span>
        <p>ВОПРОС {`${currentQuestion + 1} / ${questionsCount}`}</p>
        <h2>{question.question}</h2>
      </Container>
      <div className={styles.actions}>
        {question.options.map((option, index) => (
          <OptionButton
            key={option}
            variant={
              selectedOptions.includes(option)
                ? question.answer.includes(option)
                  ? 'success'
                  : 'error'
                : 'default'
            }
            disabled={!!selectedOptions.length}
            option={option}
            number={index + 1}
            onClick={() => onSelect(option)}
          />
        ))}
      </div>
      <div className={styles.actions}>
        <Button text={'На главную'} />
        <Button
          text={'Далее'}
          onClick={() => setQuestion(currentQuestion + 1)}
          disabled={!selectedOptions.length}
        />
      </div>
    </div>
  );
};
