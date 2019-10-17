import React from 'react';
import CardR from './CardR';

import { version, Row, Col, Card } from "antd";

function Duo() {
  return(
    <div>
      <div>
        <Row gutter={12}>

          <Col span={12}>
            <CardR />
          </Col>

          <Col span={12}>
            <CardR />
          </Col>          
        </Row>
      </div>
    </div>


  );
}
export default Duo;