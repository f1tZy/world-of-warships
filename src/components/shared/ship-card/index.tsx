import { FC } from 'react';
import { Card } from 'antd';
import s from './style.module.css';
import { TypeShipItem } from '../../../types';
import { getLevel } from './lib';
import { prefixUrl } from '../../../const';

type Props = {
  ship: TypeShipItem;
  showModal: (ship: TypeShipItem) => void;
};
export const ShipCard: FC<Props> = (props) => {
  const { ship, showModal } = props;

  return (
    <Card
      className={s.card}
      hoverable
      cover={<img alt="example" src={prefixUrl + ship.icons.small} />}
      onClick={() => showModal(ship)}
    >
      <span className={s.level}>{getLevel(ship.level)}</span>
      <h3 className={s.title}>{ship.localization.shortmark.ru}</h3>
    </Card>
  );
};
