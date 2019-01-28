import React, { Component } from 'react';
import logo from '../../../public/logo.svg';
import './logo.css';

export default class Logo extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="logo-app" alt="logo" />
      </div>
    );
  }
}