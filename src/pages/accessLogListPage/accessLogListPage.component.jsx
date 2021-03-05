import React, { Component } from 'react';
import NavbarBottom from '../../components/common-components/navbar';
import Header from '../../components/common-components/header/header.component';
import accessDetails from '../../data/accessLogs.json';

import './accessLogListPage.styles.scss';

const users = accessDetails.map(access => access.Name);
const userlist = users.filter((value, index, self) => self.indexOf(value) === index);
const accessLogListPage = () => {
  return (
    <>
      <div className="accessLogListPage">
        <Header heading="All Activity Logs" />

        {userlist.map(user => (
          <div className="activity-log-user" key={user._id}>
            <h3>{user}</h3>
            {accessDetails.map(access => {
              if (access.Name === user) {
                return (
                  <div className="activity-log-card">
                    <div className="activity-log-title">
                      <span>{access.Location}</span>
                      <span> {access.Date}</span>
                    </div>{' '}
                    <div className="activity-log-verified">{access.VerifiedWith}</div>
                  </div>
                );
              }
            })}
          </div>
        ))}
        <NavbarBottom />
      </div>
    </>
  );
};

export default accessLogListPage;
