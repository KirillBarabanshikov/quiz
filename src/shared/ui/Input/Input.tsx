import { forwardRef } from 'react';
import ErrorIcon from '@/shared/assets/icons/error.svg?react';
import SuccessIcon from '@/shared/assets/icons/success.svg?react';
import styles from './Input.module.scss';

interface IInput {
  placeholder?: string;
  validate?: boolean | null;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, IInput>(
  ({ placeholder, validate = null, className = '' }, ref) => {
    const isError = validate != null && !validate;
    const isSuccess = validate != null && validate;

    return (
      <div className={`${className} ${styles.input}`}>
        <input
          type='text'
          ref={ref}
          placeholder={placeholder}
          className={`${isError ? styles.error : ''} ${isSuccess ? styles.success : ''}`}
          disabled={isSuccess || isError}
        />
        {isError && <ErrorIcon className={styles.icon} />}
        {isSuccess && <SuccessIcon className={styles.icon} />}
      </div>
    );
  },
);
