import { FC, PropsWithChildren } from 'react';
import styles from './Container.module.scss';

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
    <div className={`${className} ${styles.container} ${styles[theme]} ${styles[direction]}`}>
      {children}
    </div>
  );
};
