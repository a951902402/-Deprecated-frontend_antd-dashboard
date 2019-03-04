import React from 'react';
import LogoImg from '../../../public/logo.svg';
import styles from './logo.less';

const Logo = (props) => {
  const { collapsed } = props
  return (
    <div className={styles.brand}>
      <div className={styles.logo}>
        <img alt="logo" src={LogoImg} />
        {collapsed ? null : <h1>React</h1>}
      </div>
    </div>
  )
}


export default Logo