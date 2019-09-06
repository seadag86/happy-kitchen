import React from 'react';
import styles from './Overlay.module.scss';

export interface IOverlay {
  active: boolean;
}

const Overlay: React.FC<IOverlay> = ({ active, children }) => {
  const isActive = active ? '--active' : '';
  return (
    <div className={`${styles['overlay']} ${styles[`overlay${isActive}`]}`}>
      {children}
    </div>
  );
};

export default Overlay;
