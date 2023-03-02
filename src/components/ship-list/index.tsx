import { FC, memo } from 'react';
import s from './style.module.css';
import { TypeShipItem } from '../../types';
import { ShipCard } from '../shared/ship-card';

type Props = {
  shipListByNation: TypeShipItem[];
  handleShowModal: (ship: TypeShipItem) => void;
};

export const ShipList: FC<Props> = memo((props) => {
  const { shipListByNation, handleShowModal } = props;

  return (
    <div className={s.listWrapper}>
      {shipListByNation
        .sort((prev, next) => prev.level - next.level)
        .map((ship) => (
          <ShipCard key={ship.name} ship={ship} showModal={handleShowModal} />
        ))}
    </div>
  );
});
