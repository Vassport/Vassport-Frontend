import React from 'react';
import { Card, Form } from 'react-bootstrap';
import { IoIosArrowForward } from 'react-icons/io';
import NavbarBottom from '../../components/common-components/navbar';

import './vaccineListPage.styles.scss';

const VaccineListPage = () => {
  return (
    <div className="vaccineListPage">
      <h1>Liam Green</h1>
      <Form.Group>
        <Form.Control type="text" placeholder="Search" />
      </Form.Group>
      <h3>COVID 19</h3>
      <Card>
        {' '}
        <Card.Body className="vaccineCard">
          1st Dose COVID-19
          <IoIosArrowForward className="arrow" />
        </Card.Body>
      </Card>
      <Card>
        {' '}
        <Card.Body className="vaccineCard">
          1st Dose COVID-19
          <IoIosArrowForward className="arrow" />
        </Card.Body>
      </Card>
      <NavbarBottom />
    </div>
  );
};

export default VaccineListPage;
