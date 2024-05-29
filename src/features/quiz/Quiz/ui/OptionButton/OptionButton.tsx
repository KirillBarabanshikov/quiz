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
    <div className={`${styles.wrap} ${styles[variant]} ${disabled ? styles.disabled : ''}`}>
      <span>{number}</span>
      <button onClick={onClick} className={`${styles.button}`} disabled={disabled}>
        {option}
      </button>
    </div>
  );
};
