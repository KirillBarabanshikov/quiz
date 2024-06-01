import { FC } from 'react';
import { clsx } from 'clsx';
import styles from './OptionButton.module.scss';

interface IOptionButton {
  option: string;
  number: number;
  variant?: 'button' | 'image';
  state?: 'default' | 'success' | 'error';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const OptionButton: FC<IOptionButton> = ({
  option,
  number,
  variant = 'button',
  state = 'default',
  onClick,
  disabled = false,
  className,
}) => {
  if (variant === 'image') {
    return (
      <div
        onClick={disabled ? undefined : onClick}
        className={clsx(styles.wrap, styles.image, styles[state], disabled && styles.disabled)}
      >
        <span>{number}</span>
        <div className={styles.check}></div>
        <img src={option} />
      </div>
    );
  }

  return (
    <div className={clsx(className, styles.wrap, styles[state], disabled && styles.disabled)}>
      <span>{number}</span>
      <button onClick={onClick} disabled={disabled} className={styles.button}>
        {option}
      </button>
    </div>
  );
};
