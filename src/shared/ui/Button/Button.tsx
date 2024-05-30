import { FC } from 'react';
import styles from './Button.module.scss';

interface IButton {
  text: string;
  theme?: 'blue' | 'white';
  variant?: 'primary' | 'outline';
  size?: 'large' | 'medium';
  disabled?: boolean;
  maxWidth?: string;
  onClick?: () => void;
}

export const Button: FC<IButton> = ({
  text,
  theme = 'blue',
  variant = 'primary',
  size = 'large',
  disabled = false,
  onClick,
  maxWidth,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${styles[theme]} ${styles[variant]} ${styles[size]}`}
      style={{ maxWidth }}
    >
      {text}
    </button>
  );
};
