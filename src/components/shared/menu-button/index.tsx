import s from './style.module.css';
import { FC } from 'react';
import cn from 'classnames';

type Props = {
  text: string;
  onClick: () => void;
  img: string;
  active: boolean;
};

export const MenuButton: FC<Props> = (props) => {
  const { text, onClick, img, active } = props;

  return (
    <button className={cn(s.menuButton, { [s.active]: active })} onClick={onClick}>
      <img className={s.buttonImage} src={img} alt="Nation" />
      <span>{text}</span>
    </button>
  );
};
