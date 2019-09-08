import React from 'react';
import styles from './Overlay.module.scss';
import { Button } from 'antd';
import { useStateValue } from '../state';

export interface IOverlay {
  active: boolean;
}

const Overlay: React.FC<IOverlay> = ({ active, children }) => {
  const [{}, dispatch] = useStateValue();
  const isActive = active ? '--active' : '';

  const onCloseOverlay = () => {
    dispatch({ type: 'toggleOverlay', payload: false });
    document.body.style.overflow = 'auto';
  };
  console.log(active);

  return (
    <section className={`${styles['overlay']} ${styles[`overlay${isActive}`]}`}>
      <header className={styles['overlay__header']}>
        <Button
          type="link"
          icon="close"
          size="large"
          onClick={onCloseOverlay}
        ></Button>
      </header>
      <article className={styles['overlay__content']}>{children}</article>
    </section>
  );
};

export default Overlay;
