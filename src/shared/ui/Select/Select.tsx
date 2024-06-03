import { FC, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { clsx } from 'clsx';
import Chevron from '@/shared/assets/icons/chevron.svg?react';
import styles from './Select.module.scss';

interface ISelect {
  placeholder: string;
  options: { value: number; title: string; state?: 'error' | 'success' }[];
  onSelect: (value: number) => void;
  disabled?: boolean;
}

export const Select: FC<ISelect> = ({ placeholder, options, onSelect, disabled = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrap}>
      <div className={styles.select} onClick={() => setIsOpen((prevState) => !prevState)}>
        <span className={styles.text}>{placeholder}</span>
        <AnimatePresence initial={false} mode={'wait'}>
          <motion.div
            initial={{
              rotate: isOpen ? 0 : 180,
            }}
            animate={{
              rotate: isOpen ? 180 : 0,
            }}
          >
            <Chevron />
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence mode={'wait'}>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
              y: '-20px',
            }}
            animate={{
              height: 'auto',
              opacity: 1,
              y: 0,
            }}
            exit={{
              height: 0,
              opacity: 0,
              y: '-20px',
            }}
            key={'options'}
            className={styles.options}
          >
            {options.map(({ value, title, state }) => (
              <div
                key={value}
                onClick={disabled ? undefined : () => onSelect(value)}
                className={clsx(styles.option, state && styles[state])}
              >
                <div className={styles.radio}>
                  <span></span>
                </div>
                <span className={styles.text}>{title}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
