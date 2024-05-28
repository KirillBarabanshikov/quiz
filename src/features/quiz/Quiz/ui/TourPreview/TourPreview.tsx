import { FC } from 'react';

interface ITourPreview {
  name: string;
  number: number;
}

export const TourPreview: FC<ITourPreview> = ({ name, number }) => {
  return (
    <div>
      {name} {number}
    </div>
  );
};
