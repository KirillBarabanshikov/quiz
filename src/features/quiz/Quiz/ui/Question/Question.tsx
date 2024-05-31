import { FC, useEffect, useRef, useState } from 'react';
import { IQuestion as InterfaceQuestion } from '../../types/types.ts';
import { Button, Container, Input, Keyboard, Modal } from '@/shared/ui';
import { useQuizStore } from '@/features/quiz/Quiz/store/store.ts';
import { OptionButton } from '@/features/quiz/Quiz/ui/OptionButton/OptionButton.tsx';
import styles from '../../Quiz.module.scss';
import { FinishTrgger, TourResult } from '@/features/quiz/Quiz/ui';
import { motion } from 'framer-motion';

interface IQuestion {
  question: InterfaceQuestion;
  questionsCount: number;
}

export const Question: FC<IQuestion> = ({ question, questionsCount }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [showModal, setShowModal] = useState(false);
  const { currentQuestion, setQuestion, currentTour } = useQuizStore();
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSelectedOptions([]);
    setIsValid(null);
    setShowModal(false);
    if (ref.current) ref.current.value = '';
  }, [question]);

  function onSelect(option: string) {
    setSelectedOptions((prevState) => [...prevState, option]);
    question.answer.includes(option) && setCorrectAnswers((prevState) => prevState + 1);
  }

  function onEnter() {
    if (!ref.current) return;
    setIsValid(
      question.answer.map((item) => item.toLowerCase()).includes(ref.current.value.toLowerCase()),
    );
  }

  function onNext() {
    if (question.type === 'blank') {
      return setShowModal(true);
    }

    setQuestion(currentQuestion + 1);
  }

  if (currentQuestion > questionsCount - 1) {
    return <TourResult questionsCount={questionsCount} correctAnswers={correctAnswers} />;
  }

  return (
    <div className={styles.wrapper}>
      <Container className={`${styles.container} ${styles.question}`}>
        <span className={styles.badge}>{currentTour + 1} тур</span>
        {currentTour != 2 && <p>ВОПРОС {`${currentQuestion + 1} / ${questionsCount}`}</p>}
        <h2>{question.question}</h2>
        {question.type === 'blank' && (
          <>
            <Input
              ref={ref}
              placeholder={'Введите ответ'}
              className={styles.input}
              validate={isValid}
            />
            <Keyboard inputRef={ref} onEnter={onEnter} />
          </>
        )}
      </Container>
      {question.options && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.actions}>
          {question.options.map((option, index) => (
            <OptionButton
              key={option}
              type={question.type}
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
        </motion.div>
      )}
      <div className={styles.actions}>
        <FinishTrgger />
        <Button
          text={'Далее'}
          onClick={onNext}
          disabled={!selectedOptions.length && isValid === null}
        />
      </div>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setQuestion(currentQuestion + 1);
        }}
        className={styles.modal}
      >
        <h3>{question.description?.title}</h3>
        <p>{question.description?.description}</p>
        <Button text={'Закрыть'} size={'medium'} onClick={() => setQuestion(currentQuestion + 1)} />
      </Modal>
    </div>
  );
};
