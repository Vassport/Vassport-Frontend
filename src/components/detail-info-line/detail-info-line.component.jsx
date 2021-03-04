import React from 'react';

import './detail-info-line.styles.scss';

const DetailInfoLine = ({ keyName, value }) => (
  <div className="detail">
    <div className="detail-key-box">
      <p className="detail-key">{keyName}</p>
    </div>
    <div className="detail-value-box">
      <p className="detail-value">{value}</p>
    </div>
  </div>
);

export default DetailInfoLine;
