import React from 'react';
import CardR from './CardR';

import { version, Row, Col, Card } from "antd";

function Trio() {
  return(
    <div>
      <div>
        <Row gutter={8}>

          <Col span={8}>
            <CardR />
          </Col>

          <Col span={8}>
            <CardR />
          </Col>

          <Col span={8}>
            <CardR />
          </Col>
          
        </Row>
      </div>
    </div>


  );
}
export default Trio;