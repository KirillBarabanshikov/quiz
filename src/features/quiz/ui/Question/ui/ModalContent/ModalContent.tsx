import { FC } from 'react';
import { IDescription } from '@/features/quiz/types/types.ts';
import { Button } from '@/shared/ui';
import styles from './ModalContent.module.scss';

interface IModalContent {
  description: IDescription;
  onClose: () => void;
}

export const ModalContent: FC<IModalContent> = ({ description, onClose }) => {
  return (
    <div className={styles.content}>
      <h3>{description.title}</h3>
      <p>{description?.description}</p>
      <Button text={'Закрыть'} size={'medium'} onClick={onClose} />
    </div>
  );
};
