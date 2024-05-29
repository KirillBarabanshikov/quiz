import { FC } from 'react';
import styles from './Button.module.scss';

interface IButton {
  text: string;
  theme?: 'blue' | 'white';
  disabled?: boolean;
  maxWidth?: string;
  onClick?: () => void;
}

export const Button: FC<IButton> = ({
  text,
  theme = 'blue',
  disabled = false,
  onClick,
  maxWidth,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${styles[theme]}`}
      style={{ maxWidth }}
    >
      {text}
    </button>
  );
};
