import React, { FC, RefObject, useEffect, useState } from 'react';
import { keys } from './data/data.ts';
import styles from './Keyboard.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';

interface IKeyboard {
  inputRef: RefObject<HTMLInputElement>;
  onEnter: () => void;
}

export const Keyboard: FC<IKeyboard> = ({ inputRef, onEnter }) => {
  const [showKeyboard, setShowKeyboard] = useState(false);

  useEffect(() => {
    const handleFocus = () => setShowKeyboard(true);
    const handleBlur = () => setShowKeyboard(false);

    inputRef.current?.addEventListener('focus', handleFocus);
    inputRef.current?.addEventListener('blur', handleBlur);

    return () => {
      inputRef.current?.removeEventListener('focus', handleFocus);
      inputRef.current?.removeEventListener('blur', handleBlur);
    };
  }, [inputRef]);

  function onChange(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement;
    const { code, key } = target.dataset;
    const { current: input } = inputRef;

    if (!input || !code || !key) return;

    const start = input.selectionStart ?? 0;
    const end = input.selectionEnd ?? 0;

    switch (code) {
      case 'Backspace':
        input.value = input.value.slice(0, start > 0 ? start - 1 : start) + input.value.slice(end);
        input.setSelectionRange(start > 0 ? start - 1 : start, end > 0 ? end - 1 : end);
        break;

      case 'Enter':
        return onEnter();

      case 'KeyLang':
        return;

      case 'KeyNum':
        return;

      default:
        input.value = input.value.slice(0, start) + key + input.value.slice(end);
        input.setSelectionRange(start + 1, end + 1);
    }
  }

  return createPortal(
    <AnimatePresence>
      {showKeyboard && (
        <motion.div
          initial={{ opacity: 0, y: '50%', pointerEvents: 'none' }}
          animate={{ opacity: 1, y: 0, pointerEvents: 'initial' }}
          exit={{ opacity: 0, y: '50%', pointerEvents: 'none' }}
          className={styles.keyboard}
          onClick={(e) => onChange(e)}
          onMouseDown={(e) => e.preventDefault()}
        >
          {keys.map((row, i) => {
            return (
              <div key={i} className={styles.row}>
                {row.map(({ code, key }) => (
                  <button key={code} data-code={code} data-key={key} className={styles[code]}>
                    {key}
                  </button>
                ))}
              </div>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById('portal') as HTMLDivElement,
  );
};
