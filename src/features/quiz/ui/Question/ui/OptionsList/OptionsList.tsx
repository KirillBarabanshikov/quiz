import { FC, useEffect, useMemo, useState } from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import { OptionButton } from '@/shared/ui';
import { useQuizStore } from '@/features/quiz';
import styles from './OptionsList.module.scss';

interface IOptionsList {
  options: string[];
  answers: string[];
  onSelect: () => void;
}

export const OptionsList: FC<IOptionsList> = ({ options, answers, onSelect }) => {
  const { setCorrectAnswers, currentTour, currentQuestion } = useQuizStore();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  useEffect(() => {
    setSelectedOptions([]);
  }, [options]);

  function onClick(option: string) {
    if (!selectedOptions.includes(option)) {
      setSelectedOptions((prevState) => [...prevState, option]);
      if (answers.includes(option)) setCorrectAnswers(option);
      onSelect();
    }
  }

  const currentNumber = (index: number) => {
    if (currentTour === 4 && currentQuestion === 1) return index + 19;
    if (currentTour === 4 && currentQuestion === 2) return index + 37;
    return index + 1;
  };

  const currentStyle = (index: number) => {
    if (currentTour === 4 && (currentQuestion === 0 || currentQuestion === 1)) return styles.six;
    if (currentTour === 4 && index < 5) return styles.five;
    if (currentTour === 4) return styles.four;
  };

  const isDisabled = useMemo(() => {
    return currentTour === 3
      ? !!selectedOptions.length
      : !!selectedOptions.length && options.length < 5;
  }, [selectedOptions, options, currentTour]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.list}>
      {options.map((option, index) => (
        <OptionButton
          key={option}
          option={option}
          number={currentNumber(index)}
          onClick={() => onClick(option)}
          state={
            selectedOptions.includes(option)
              ? answers.includes(option)
                ? 'success'
                : 'error'
              : 'default'
          }
          disabled={isDisabled}
          variant={currentTour === 2 && currentQuestion === 1 ? 'image' : 'button'}
          className={clsx(styles.option, currentStyle(index))}
        />
      ))}
    </motion.div>
  );
};
