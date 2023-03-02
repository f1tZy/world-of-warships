import s from './style.module.css';
import { Button, Result } from 'antd';

export const ErrorPage = () => {
  return (
    <Result
      className={s.errorPageWrapper}
      status="500"
      title={<p className={s.errorTitle}>500</p>}
      subTitle={<span className={s.errorSubtitle}>Sorry, something went wrong.</span>}
      extra={
        <Button type="primary" onClick={() => location.reload()}>
          Reload page
        </Button>
      }
    />
  );
};
