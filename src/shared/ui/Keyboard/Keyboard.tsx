import React, { FC, RefObject, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { keyboard } from './data/data.ts';
import styles from './Keyboard.module.scss';

interface IKeyboard {
  inputRef: RefObject<HTMLInputElement>;
  onEnter: () => void;
}

export const Keyboard: FC<IKeyboard> = ({ inputRef, onEnter }) => {
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [currentLayout, setCurrentLayout] = useState<'rus' | 'en' | 'num'>('rus');

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
        if (start != end) {
          input.value = input.value.slice(0, start) + input.value.slice(end);
          input.setSelectionRange(start, start);
        } else {
          input.value = input.value.slice(0, start && start - 1) + input.value.slice(end);
          input.setSelectionRange(start && start - 1, end && end - 1);
        }
        break;

      case 'Enter':
        return onEnter();

      case 'KeyLang':
        return setCurrentLayout((prevState) => (prevState === 'rus' ? 'en' : 'rus'));

      case 'KeyNum':
        return setCurrentLayout('num');

      default:
        if (start != end) {
          input.value = input.value.slice(0, start) + key + input.value.slice(end);
          input.setSelectionRange(start + 1, start + 1);
        } else {
          input.value = input.value.slice(0, start) + key + input.value.slice(end);
          input.setSelectionRange(start + 1, end + 1);
        }
    }
  }

  return createPortal(
    <AnimatePresence>
      {showKeyboard && (
        <motion.div
          initial={{ opacity: 0, y: '50%', x: '-50%', pointerEvents: 'none' }}
          animate={{ opacity: 1, y: 0, x: '-50%', pointerEvents: 'initial' }}
          exit={{ opacity: 0, y: '50%', x: '-50%', pointerEvents: 'none' }}
          className={styles.keyboard}
          onClick={(e) => onChange(e)}
          onMouseDown={(e) => e.preventDefault()}
        >
          {keyboard[currentLayout].map((row, i) => {
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
