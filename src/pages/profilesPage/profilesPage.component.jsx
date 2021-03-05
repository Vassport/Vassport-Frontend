import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiQrCodeLine } from 'react-icons/ri';
import NavbarBottom from '../../components/common-components/navbar';
import Header from '../../components/common-components/header/header.component';

import './profilesPage.styles.scss';

const profiles = ['Lauren Green', 'Ashley Green', 'Liam Green'];

const ProfilesPage = () => {
  return (
    <div className="profilesPage">
      <Header heading="Profiles" />
      {/* vaccine: random */}
      {profiles.map((profile, i) => (
        <Link
          key={i}
          to={{
            pathname: `/detail/${i}`,
            state: { index: i },
          }}
        >
          <Card className="profileCard">
            {' '}
            <Card.Body className="profileCard-body">
              <p className="profileCard-p">{profile}</p>
              <RiQrCodeLine className="qrcode" size={40} color="#0c536b" />
              <IoIosArrowForward className="arrow" size={40} color="#0c536b" />
            </Card.Body>
          </Card>
        </Link>
      ))}     
      <Link to="/addProfile">
        <Card className="addProfileCard">
        {' '}
        <Card.Body className="addProfileCard-body">
          Add Profile
          <AiOutlinePlus className="add" size={40} color="#0c536b" />
        </Card.Body>
        </Card>
      </Link>
      <p className="viewActicityLog-p">View All Activity Log</p>
      <NavbarBottom />
    </div>
  );
};

export default ProfilesPage;
