import { Button, Modal } from '@/shared/ui';
import { FC, useState } from 'react';
import { useQuizStore } from '@/features/quiz';
import arrow from '@/shared/assets/images/growthArrow.png';
import styles from './FinishButton.module.scss';

interface IFinishButton {
  isLast?: boolean;
}

export const FinishButton: FC<IFinishButton> = ({ isLast = false }) => {
  const [showModal, setShowModal] = useState(false);
  const { currentTour, currentQuestion, finish } = useQuizStore();

  function onFinish() {
    if ((!currentTour && !currentQuestion) || isLast) return finish();
    setShowModal(true);
  }

  return (
    <>
      <Button text={'На главную'} onClick={onFinish} />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className={styles.container}>
          <div className={styles.img}>
            <img src={arrow} />
          </div>
          <h3>Весь прогресс будет утерян</h3>
          <p>Вы уверены что хотите выйти?</p>
          <div className={styles.actions}>
            <Button text={'Да'} onClick={finish} variant={'outline'} size={'medium'} />
            <Button text={'Нет'} size={'medium'} onClick={() => setShowModal(false)} />
          </div>
        </div>
      </Modal>
    </>
  );
};
