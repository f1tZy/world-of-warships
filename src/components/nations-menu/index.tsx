import { FC, memo } from 'react';
import { NationList } from '../../types/nation-list';
import s from './style.module.css';
import { MenuButton } from '../shared/menu-button';
import { getButtonImage } from '../shared/menu-button/lib';

type Props = {
  nationKeys: string[];
  setNation: (nation: string) => void;
  activeNation: string;
};

export const NationsMenu: FC<Props> = memo((props) => {
  const { nationKeys, setNation, activeNation } = props;

  return (
    <div className={s.menuWrapper}>
      {nationKeys.map((nationKey) => {
        return (
          <MenuButton
            key={nationKey}
            text={NationList[nationKey]}
            onClick={() => setNation(nationKey)}
            img={getButtonImage(NationList[nationKey])}
            active={activeNation === nationKey}
          />
        );
      })}
    </div>
  );
});
