import { FC } from 'react';
import styles from './OptionButton.module.scss';

interface IOptionButton {
  option: string;
  number: number;
  variant?: 'default' | 'success' | 'error';
  onClick?: () => void;
  disabled?: boolean;
}

export const OptionButton: FC<IOptionButton> = ({
  option,
  number,
  variant = 'default',
  onClick,
  disabled = false,
}) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${styles[variant]}`} disabled={disabled}>
      {number} {option}
    </button>
  );
};
