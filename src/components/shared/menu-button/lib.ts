import { NationList } from '../../../types/nation-list';
import commonwealth from '../../../images/nations/commonwealth.png';
import europe from '../../../images/nations/europe.png';
import france from '../../../images/nations/france.png';
import uk from '../../../images/nations/uk.png';
import germany from '../../../images/nations/germany.png';
import italy from '../../../images/nations/italy.png';
import japan from '../../../images/nations/japan.png';
import netherlands from '../../../images/nations/netherlands.png';
import panAmerica from '../../../images/nations/pan-america.png';
import panAsia from '../../../images/nations/pan-asia.png';
import spain from '../../../images/nations/spain.png';
import usa from '../../../images/nations/usa.png';
import ussr from '../../../images/nations/ussr.png';

export const getButtonImage = (nation: NationList) => {
  switch (nation) {
    case NationList.commonwealth:
      return commonwealth;
    case NationList.europe:
      return europe;
    case NationList.france:
      return france;
    case NationList.germany:
      return germany;
    case NationList.italy:
      return italy;
    case NationList.japan:
      return japan;
    case NationList.netherlands:
      return netherlands;
    case NationList.pan_america:
      return panAmerica;
    case NationList.pan_asia:
      return panAsia;
    case NationList.spain:
      return spain;
    case NationList.uk:
      return uk;
    case NationList.usa:
      return usa;
    case NationList.ussr:
      return ussr;
    default:
      return '';
  }
};
