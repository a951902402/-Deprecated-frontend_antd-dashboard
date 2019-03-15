import React, { PureComponent, Fragment } from 'react';
import LogoImg from '../../../public/Logo.svg';
import styles from './Logo.less';

export default class Logo extends PureComponent {
  render() {
    const { collapsed } = this.props
    return (
      <Fragment>
        <div className={styles.logo}>
          <img alt="logo" src={LogoImg} />
          {collapsed ? null : <h1>React</h1>}
        </div>
      </Fragment>
    )
  }
}