import { FC, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Chevron from '@/shared/assets/icons/chevron.svg?react';
import styles from './Select.module.scss';

interface ISelect {
  placeholder: string;
  options: { value: string; title: string }[];
}

export const Select: FC<ISelect> = ({ placeholder, options }) => {
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
            {options.map(({ value, title }) => (
              <div key={value} className={styles.option}>
                <div className={styles.radio}></div>
                <span className={styles.text}>{title}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
