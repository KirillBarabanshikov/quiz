import { FC, useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';
import { Button, Container, Input, Keyboard, Modal } from '@/shared/ui';
import { FinishButton } from '@/features/quiz/ui';
import { useQuizStore } from '@/features/quiz';
import { IQuestion as InterfaceQuestion } from '../../types/types.ts';
import { ModalContent, OptionsList } from './ui';
import styles from '../Quiz.module.scss';

interface IQuestion {
  question: InterfaceQuestion;
  questionsNumber: number;
  subtitle?: string;
}

export const Question: FC<IQuestion> = ({ question, questionsNumber, subtitle }) => {
  const { setQuestion, currentQuestion, currentTour, nextTour, incCorrectAnswers } = useQuizStore();
  const [isDisabled, setIsDisabled] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [validate, setValidate] = useState<boolean | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsDisabled(true);
    setValidate(null);
    if (inputRef.current) inputRef.current.value = '';
  }, [question]);

  function onNext() {
    if (currentTour === 5) return setShowModal(true);
    if (
      (currentTour === 3 && currentQuestion === 7) ||
      (currentTour === 6 && currentQuestion === 1)
    ) {
      return nextTour();
    }

    setQuestion(currentQuestion + 1);
  }

  function onSelect() {
    setIsDisabled(false);
  }

  function onClose() {
    setShowModal(false);
    if (currentQuestion >= questionsNumber - 1) {
      nextTour();
    } else {
      setQuestion(currentQuestion + 1);
    }
  }

  function onEnter() {
    if (!inputRef?.current?.value) return;
    const validate = question.answers
      .map((item) => item.toLowerCase())
      .includes(inputRef.current.value.trim().toLowerCase());
    if (validate) incCorrectAnswers();
    setValidate(validate);
    setIsDisabled(false);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <Container className={clsx(styles.container, styles.question, styles.left)}>
          <span className={styles.badge}>{currentTour + 1} тур</span>
          {currentTour !== 2 && (
            <p className={clsx(subtitle && styles.subtitle)}>
              {subtitle ? subtitle : `ВОПРОС ${currentQuestion + 1} / ${questionsNumber}`}
            </p>
          )}
          <h2 className={clsx((question.question.length > 170 || subtitle) && styles.less)}>
            {question.question}
          </h2>
          {question.options.length === 0 && (
            <>
              <Input
                ref={inputRef}
                placeholder={'Введите ответ'}
                validate={validate}
                className={styles.input}
              />
              <Keyboard inputRef={inputRef} onEnter={onEnter} />
            </>
          )}
        </Container>
        {question.image && (
          <Container theme={'white'} className={styles.right}>
            <img src={question.image} />
          </Container>
        )}
      </div>
      {question.options.length > 0 && (
        <OptionsList options={question.options} answers={question.answers} onSelect={onSelect} />
      )}
      <div className={styles.actions}>
        <FinishButton />
        <Button text={'Далее'} onClick={onNext} disabled={isDisabled} />
      </div>
      {question.description && (
        <Modal isOpen={showModal} onClose={onClose} className={styles.modal}>
          <ModalContent description={question.description} onClose={onClose} />
        </Modal>
      )}
    </div>
  );
};
