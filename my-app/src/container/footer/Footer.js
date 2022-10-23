import { Col, Image, Row } from 'antd'
import React from 'react'

function Footer() {
  return (
    <footer>
        <nav
        style={{
            backgroundColor:"#2c2c2c",
            color: "white",
            paddingLeft: "5%",
            paddingRight: "5%",
            paddingTop: 50,
            paddingBottom: 50,

        }}>
            <Row>
                <Col xs={24} xl={9}>
                    <Row>
                        <Col span={24}>
                            <Image 
                            fallback='https://avatars1.githubusercontent.com/u/8186664?s=460&v=4'
                            src='error'
                            width={50}
                            height={50}
                            style={{marginTop: -5}} />

                            <label style={{ paddingLeft: 10, fontSize: 25}}>Toflyn</label>
                        </Col>
                        <Col span={24} style={{paddingTop: 12}}>
                            <span>แหล่งรวมร้านค้าขายของเล่น ทั้งมือหนึ่ง และมือสอง ที่มากที่สุดในประเทษ</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </nav>
    </footer>
  )
}

export default Footer