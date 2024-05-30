import { FC, PropsWithChildren } from 'react';
import styles from './Container.module.scss';
import { motion } from 'framer-motion';

interface IContainer extends PropsWithChildren {
  theme?: 'blue' | 'white' | 'gradient' | 'lightblue';
  className?: string;
  center?: boolean;
  direction?: 'column' | 'row';
}

export const Container: FC<IContainer> = ({
  children,
  theme = 'lightblue',
  className = '',
  direction = 'column',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${className} ${styles.container} ${styles[theme]} ${styles[direction]}`}
    >
      {children}
    </motion.div>
  );
};
