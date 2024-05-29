import { FC } from 'react';
import { Button } from '@/shared/ui';
import Logo from '@/shared/assets/icons/logo_2.svg?react';

interface IStartQuiz {
  onStart: () => void;
}

export const StartQuiz: FC<IStartQuiz> = ({ onStart }) => {
  return (
    <div>
      <Logo />
      <Button onClick={onStart} text={'Начать'} theme={'white'} />
    </div>
  );
};
