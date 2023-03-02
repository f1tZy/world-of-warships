import { FC, useState, useMemo, memo, useCallback } from 'react';
import s from './style.module.css';
import { NationList } from '../../types/nation-list';
import { TypeResponseData, TypeShipItem } from '../../types';
import { NationsMenu } from '../../components/nations-menu';
import { ShipList } from '../../components/ship-list';
import { ShipModal } from '../../components/ship-modal';

type Props = {
  responseShipsData: TypeResponseData;
};

const nationKeys = Object.keys(NationList);

export const ShipListPage: FC<Props> = memo((props) => {
  const { responseShipsData } = props;
  const [nation, setNation] = useState(() => nationKeys[0]);
  const [shipData, setShipData] = useState<TypeShipItem | null>(null);

  const handleShowModal = useCallback((ship: TypeShipItem) => {
    setShipData(ship);
  }, []);

  const handleCloseModal = () => {
    setShipData(null);
  };

  const shipListByNation = useMemo(() => {
    return Object.keys(responseShipsData).reduce<TypeShipItem[]>((acc, key) => {
      const ship = responseShipsData[key];
      if (ship.nation === nation) {
        acc.push(ship);
      }
      return acc;
    }, []);
  }, [nation, responseShipsData]);

  return (
    <div className={s.wrapper}>
      <ShipModal open={!!shipData} onCancel={handleCloseModal} shipData={shipData} />
      <NationsMenu activeNation={nation} nationKeys={nationKeys} setNation={setNation} />
      <ShipList shipListByNation={shipListByNation} handleShowModal={handleShowModal} />
    </div>
  );
});
