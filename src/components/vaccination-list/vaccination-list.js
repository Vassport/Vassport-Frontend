import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export default function VaccinationList() {
  return (
    <div>
      <h1>Liam Green</h1>
      <h3>COVID 19</h3>
      <Card>
        {' '}
        <Card.Body>1st Dose COVID-19</Card.Body>
      </Card>
      <Card>
        {' '}
        <Card.Body>1st Dose COVID-19</Card.Body>
      </Card>
    </div>
  );
}
