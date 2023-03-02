import { TypeResponseData } from '../types';
import { requestUrl } from '../const';

export const fetchShipList = (): Promise<TypeResponseData> => {
  return fetch(requestUrl)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      if (json && json.error) {
        throw new Error(json.code);
      }

      return json.data;
    });
};
