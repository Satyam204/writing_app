import React from 'react';
import { Card, Col, Row } from 'antd';
import { Button, Divider, Flex, Radio } from 'antd';
     
const Add = () => (
<header className="App-header">
    <Card title="Add Block" bordered={true} style={{ width:500}}>
  <Row>
    <Col span={12}>
    <Card bordered={true}>
    <Button type="primary" size='large' href="/text" rel="noopener noreferrer">Add Text</Button>
      </Card>
    </Col>
    <Col span={12}>
      <Card bordered={true}>
      <Button type="primary" size='large' href="/photo" rel="noopener noreferrer">Add Photo</Button>
        </Card>
    </Col>
  </Row>
  </Card>
</header>
); 
export default Add;