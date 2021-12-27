import React, { Component } from 'react';

import logo from '../../assets/img/CRONOS-logo-white.png';

class Header extends Component {
  render() {
    return (
      <>
        <body>
          <header>
            <div className="container">
              <a href="#">
                <img src={logo} />
              </a>
              <h1>Painel administrativo</h1>
            </div>
          </header>
        </body>
      </>
    );
  }
}
export default Header;
