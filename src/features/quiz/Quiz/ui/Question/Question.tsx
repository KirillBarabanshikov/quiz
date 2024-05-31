import { FC, useEffect, useRef, useState } from 'react';
import { IQuestion as InterfaceQuestion } from '../../types/types.ts';
import { Button, Container, Input, Keyboard, Modal } from '@/shared/ui';
import { useQuizStore } from '@/features/quiz/Quiz/store/store.ts';
import { OptionButton } from '@/features/quiz/Quiz/ui/OptionButton/OptionButton.tsx';
import styles from '../../Quiz.module.scss';
import { FinishTrigger, TourResult } from '@/features/quiz/Quiz/ui';
import { motion } from 'framer-motion';
import { ExamplesEquipment, FlagDescription } from './ui';

interface IQuestion {
  question: InterfaceQuestion;
  questionsCount: number;
}

export const Question: FC<IQuestion> = ({ question, questionsCount }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const { currentQuestion, setQuestion, currentTour, setTour } = useQuizStore();
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
    if (currentQuestion === questionsCount - 1) {
      if (currentTour === 3 || currentTour === 6) {
        setTour(currentTour + 1);
      } else {
        setShowResult(true);
      }
    } else {
      setQuestion(currentQuestion + 1);
    }
  }

  if (!question) return <></>;

  if (showResult) {
    if (currentTour === 2) {
      return <FlagDescription description={question.description!} />;
    }

    if (currentTour === 4) {
      return <ExamplesEquipment />;
    }

    return <TourResult questionsCount={questionsCount} correctAnswers={correctAnswers} />;
  }

  return (
    <div className={styles.wrapper}>
      {!('image' in question) ? (
        <Container className={`${styles.container} ${styles.question} ${styles.multiple}`}>
          <span className={styles.badge}>{currentTour + 1} тур</span>
          {currentTour === 4 && <p>Оснасти корабля капитана Чирикова</p>}
          {currentTour != 2 && currentTour != 4 && (
            <p>ВОПРОС {`${currentQuestion + 1} / ${questionsCount}`}</p>
          )}
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
      ) : (
        <div className={styles.row}>
          <Container className={`${styles.container} ${styles.left}`}>
            <span className={styles.badge}>{currentTour + 1} тур</span>
            <p>{currentTour === 3 ? 'Собери Розу Ветров' : 'Снаряди капитана Чирикова'}</p>
            <h2>{question.question}</h2>
          </Container>
          <Container theme={'white'} className={styles.right}>
            <img src={question.image} />
          </Container>
        </div>
      )}
      {question.options.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`${styles.actions} ${styles.options}`}
        >
          {question.options.map((option, index) => {
            if (question.type === 'multiple') {
              const currentSmall =
                currentTour === 4 && currentQuestion === 2 && index <= 4 ? styles.small : '';
              const currentLarge =
                currentTour === 4 && currentQuestion === 2 && index > 4 ? styles.large : '';

              return (
                <OptionButton
                  key={option}
                  option={option}
                  number={index + 1}
                  type={question.type}
                  variant={
                    selectedOptions.includes(option)
                      ? question.answer.includes(option)
                        ? 'success'
                        : 'error'
                      : 'default'
                  }
                  className={`${currentTour === 4 ? styles.option : ''} ${currentSmall} ${currentLarge}`}
                  onClick={() => onSelect(option)}
                  disabled={selectedOptions.includes(option)}
                />
              );
            }

            return (
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
                className={styles.optionRose}
              />
            );
          })}
        </motion.div>
      )}
      <div className={styles.actions}>
        <FinishTrigger />
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
          if (currentQuestion >= questionsCount - 1) {
            setTour(currentTour + 1);
          } else {
            setQuestion(currentQuestion + 1);
          }
        }}
        className={styles.modal}
      >
        <h3>{question.description?.title}</h3>
        <p>{question.description?.description}</p>
        <Button
          text={'Закрыть'}
          size={'medium'}
          onClick={() => {
            setShowModal(false);
            if (currentQuestion >= questionsCount - 1) {
              setTour(currentTour + 1);
            } else {
              setQuestion(currentQuestion + 1);
            }
          }}
        />
      </Modal>
    </div>
  );
};
