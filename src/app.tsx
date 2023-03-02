import { useEffect, useState } from 'react';
import { ShipListPage } from './pages/ship-list-page';
import { fetchShipList } from './api';
import { TypeResponseData } from './types';
import { Spin } from 'antd';
import { ErrorPage } from './pages/error-page';

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [responseShipData, setResponseShipData] = useState<TypeResponseData | null>(null);

  useEffect(() => {
    setIsLoading(true);

    fetchShipList()
      .then(setResponseShipData)
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Spin className="loading-spinner" tip="Loading" size="large" />;
  }

  return <>{!responseShipData ? <ErrorPage /> : <ShipListPage responseShipsData={responseShipData} />}</>;
};
