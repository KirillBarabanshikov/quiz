import { FC, PropsWithChildren } from 'react';
import styles from './Container.module.scss';

interface IContainer extends PropsWithChildren {
  theme?: 'blue' | 'white' | 'gradient' | 'lightblue';
}

export const Container: FC<IContainer> = ({ children, theme = 'lightblue' }) => {
  return <div className={`${styles.container} ${styles[theme]}`}>{children}</div>;
};
