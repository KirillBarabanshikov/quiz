import { FC } from 'react';
import styles from './OptionButton.module.scss';
import { QuestionType } from '@/features/quiz/Quiz/types/types.ts';

interface IOptionButton {
  option: string;
  number: number;
  variant?: 'default' | 'success' | 'error';
  onClick?: () => void;
  disabled?: boolean;
  type: QuestionType;
}

export const OptionButton: FC<IOptionButton> = ({
  option,
  number,
  variant = 'default',
  onClick,
  disabled = false,
  type,
}) => {
  if (type === 'single-image') {
    return (
      <div
        className={`${styles.wrap} ${styles.image} ${styles[variant]} ${disabled ? styles.disabled : ''}`}
        onClick={disabled ? undefined : onClick}
      >
        <span>{number}</span>
        <div className={styles.check}></div>
        <img src={option} />
      </div>
    );
  }

  return (
    <div className={`${styles.wrap} ${styles[variant]} ${disabled ? styles.disabled : ''}`}>
      <span>{number}</span>
      <button onClick={onClick} className={`${styles.button}`} disabled={disabled}>
        {option}
      </button>
    </div>
  );
};
