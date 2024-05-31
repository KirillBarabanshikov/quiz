import { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

interface IModal extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const Modal: FC<IModal> = ({ children, isOpen, onClose, className }) => {
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.overlay}
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            className={`${className} ${styles.modal}`}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById('portal') as HTMLDivElement,
  );
};
