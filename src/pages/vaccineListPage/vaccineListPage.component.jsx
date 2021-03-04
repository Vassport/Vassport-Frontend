import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Form } from 'react-bootstrap';
import { IoIosArrowForward } from 'react-icons/io';
import NavbarBottom from '../../components/common-components/navbar';
import Header from '../../components/header/header.component';
import vaccineDetails from '../../data/vaccineDetails.json';

import './vaccineListPage.styles.scss';

const covidVaccines = vaccineDetails.filter(vaccine => vaccine.Product.includes('COVID-19'));
const annualVaccines = vaccineDetails.filter(vaccine => !vaccine.Product.includes('COVID-19'));

const VaccineListPage = () => {
  return (
    <div className="vaccineListPage">
      <Header heading="Vaccination Report" />
      <h1>Liam Green</h1>
      <Form.Group>
        <Form.Control type="text" placeholder="Search" />
      </Form.Group>
      <h3>COVID 19</h3>
      {covidVaccines.map((vaccine, i) => (
        <Link
          key={i}
          to={{
            pathname: `/detail/${i}`,
            state: { index: i },
          }}
        >
          <Card>
            {' '}
            <Card.Body className="vaccineCard">
              {(() => {
                switch (i + 1) {
                  case 1:
                    return `${i + 1}st Dose COVID-19`;
                  case 2:
                    return `${i + 1}nd Dose COVID-19`;
                  case 3:
                    return `${i + 1}rd Dose COVID-19`;
                  default:
                    return `${i + 1}th Dose COVID-19`;
                }
              })()}
              <IoIosArrowForward className="arrow" />
            </Card.Body>
          </Card>
        </Link>
      ))}
      <h3>Annual Vaccine</h3>
      {annualVaccines.map((vaccine, i) => (
        <Link
          key={i}
          to={{
            pathname: `/detail/${i}`,
            state: { index: i + covidVaccines.length, vaccineName: vaccine.Product },
          }}
        >
          <Card>
            {' '}
            <Card.Body className="vaccineCard">
              {vaccine.Product}
              <IoIosArrowForward className="arrow" />
            </Card.Body>
          </Card>
        </Link>
      ))}
      <NavbarBottom />
    </div>
  );
};

export default VaccineListPage;
