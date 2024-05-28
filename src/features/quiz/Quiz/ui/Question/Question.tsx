import { FC, useEffect, useState } from 'react';
import { IQuestion as TQuestion } from '../../types/types.ts';
import { OptionButton } from '../OptionButton/OptionButton.tsx';

interface IQuestion {
  question: TQuestion;
}

export const Question: FC<IQuestion> = ({ question }) => {
  const [selectedOption, setSelectedOption] = useState<number | undefined>(undefined);

  useEffect(() => {
    setSelectedOption(undefined);
  }, [question]);

  return (
    <div>
      <div style={{ color: 'white' }}>{question.question}</div>
      {question.options.map((option, index) => (
        <OptionButton
          key={option}
          variant={
            selectedOption != undefined && selectedOption === index
              ? question.answer.includes(question.options[selectedOption])
                ? 'success'
                : 'error'
              : 'default'
          }
          option={option}
          number={index + 1}
          onClick={selectedOption != undefined ? undefined : () => setSelectedOption(index)}
        />
      ))}
    </div>
  );
};
