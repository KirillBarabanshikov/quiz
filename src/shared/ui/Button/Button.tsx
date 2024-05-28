import { FC } from 'react';
import styles from './Button.module.scss';

interface IButton {
  text: string;
  theme?: 'blue' | 'white';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: FC<IButton> = ({ text, theme = 'blue', disabled = false, onClick }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`${styles.button} ${styles[theme]}`}>
      {text}
    </button>
  );
};
