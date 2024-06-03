import { clsx } from 'clsx';
import { FC } from 'react';
import styles from './Button.module.scss';

interface IButton {
  text: string;
  theme?: 'blue' | 'white';
  variant?: 'primary' | 'outline';
  size?: 'large' | 'medium' | 'small';
  disabled?: boolean;
  maxWidth?: string;
  onClick?: () => void;
  className?: string;
}

export const Button: FC<IButton> = ({
  text,
  theme = 'blue',
  variant = 'primary',
  size = 'large',
  disabled = false,
  onClick,
  maxWidth,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(className, styles.button, styles[theme], styles[variant], styles[size])}
      style={{ maxWidth }}
    >
      {text}
    </button>
  );
};
