import React, { Component } from 'react';
import './styles/WeddingView.css';
import { connectWithStore } from '../../store/AppContext';
import { CardContainer } from '../wedding_components';
import { Links, MenuBars, Menu, SideScroll } from '../common/index';

class WeddingViewUI extends Component {
  render() {
    return (
      <div className="WeddingView-container">
        <div className="WeddingView-titleContainer">
          <h1 className="WeddingView-title">Weddings</h1>
        </div>
        <CardContainer />
        <SideScroll />
        <Links />
        <Menu />
        <MenuBars />
      </div>
    )
  }
}

const WeddingView = connectWithStore(WeddingViewUI);
export default WeddingView;
