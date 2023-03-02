import { FC } from 'react';
import s from './style.module.css';
import { Modal } from 'antd';
import { TypeShipItem } from '../../types';
import { ShipTypeList } from '../../types/ship-type-list';
import { prefixUrl } from '../../const';

type Props = {
  open: boolean;
  onCancel: () => void;
  shipData: TypeShipItem | null;
};

export const ShipModal: FC<Props> = (props) => {
  const { onCancel, open, shipData } = props;

  if (!shipData) {
    return null;
  }

  const shipType = Object.keys(ShipTypeList).find((type) => shipData.tags.includes(type));

  return (
    <Modal
      width={900}
      title={
        <p className={s.title}>
          {shipData.localization.mark.ru} ({shipType})
        </p>
      }
      open={open}
      onCancel={onCancel}
      centered
      footer={null}
    >
      <img className={s.image} src={prefixUrl + shipData.icons.large} alt={shipData.localization.mark.ru} />
      <p className={s.description}>{shipData.localization.description.ru}</p>
    </Modal>
  );
};
