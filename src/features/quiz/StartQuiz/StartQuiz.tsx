import { FC } from 'react';
import { Button } from '@/shared/ui';

interface IStartQuiz {
  onStart: () => void;
}

export const StartQuiz: FC<IStartQuiz> = ({ onStart }) => {
  return (
    <div>
      <Button onClick={onStart} text={'Начать'} theme={'white'} />
    </div>
  );
};
