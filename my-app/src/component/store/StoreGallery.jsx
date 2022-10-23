import { Card, Col, Image, Row } from 'antd'
import React from 'react'

function StoreGallery(props) {
  return (
    <>
      <Card title="ภาพสินค้าในร้าน" bordered={false}>
        <Row>
          {props.data?.map((val, index) => {
            return (
              <Col
                key={index}
                xs={24}
                sm={12}
                md={12}
                lg={6}
                xxl={4}
                style={{ paddingRight: 5, paddingLeft: 5, paddingBottom: 10 }}
              >
                {' '}
                <Image
                  src={val.imageUrl}
                  alt="Snow"
                  style={{ width: '100%', height: 130 }}
                ></Image>
              </Col>
            )
          })}
        </Row>
      </Card>
    </>
  )
}

export default StoreGallery
