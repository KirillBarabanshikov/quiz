import { FC } from 'react';
import styles from './OptionButton.module.scss';

interface IOptionButton {
  option: string;
  number: number;
  variant?: 'default' | 'success' | 'error';
  onClick?: () => void;
}

export const OptionButton: FC<IOptionButton> = ({
  option,
  number,
  variant = 'default',
  onClick,
}) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${styles[variant]}`}>
      {number} {option}
    </button>
  );
};
