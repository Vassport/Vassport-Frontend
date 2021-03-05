import React from 'react';
import QRCode from 'qrcode.react';
import { Switch } from '@material-ui/core';
import DetailInfoLine from '../../components/detail-info-line/detail-info-line.component';
import vaccineDetails from '../../data/vaccineDetails.json';
import NavbarBottom from '../../components/common-components/navbar';
import Header from '../../components/common-components/header/header.component';

import './detailPage.styles.scss';

const DetailPage = props => (
  <div className="detail-container">
    {props.location.state.vaccineName ? (
      <Header heading={props.location.state.vaccineName} />
    ) : (
      <Header heading={`${props.location.state.index + 1}nd Dose COVID-19`} />
    )}
    {Object.entries(vaccineDetails[props.location.state.index]).map(([key, value]) => (
      <DetailInfoLine key={key} keyName={key} value={value} />
    ))}
    <div className="detail-qr-box" align="center">
      <QRCode
        align="center"
        className="detail-qr"
        value="https://www.figma.com/proto/SBKa7B2svR5Lzw5WXVprhZ/Vassport?node-id=5%3A1&scaling=scale-down"
        size={340}
        level="H"
      />
    </div>
    <div className="detail-set-profile-box">
      <p className="detail-p-set-profile">Set as profile code</p>
      <Switch className="detail-switch-set-profile" />
    </div>
    <NavbarBottom />
  </div>
);

export default DetailPage;
