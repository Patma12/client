import { Col, Row, Spin } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Footer from '../../container/footer/Footer';
import Header from '../../container/header/Header';
import StoreDetail from './StoreDetail';
import StoreGallery from './StoreGallery';

function Store() {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const storeId = params.get("storeId")

  const [storeInfo, setStoreInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  

  const getBaseApi = async () => {
    setLoading(true);

    

    const result = [
    {
      "storeId": 1,
      "storeTitle": "ร้านขายรถของเล่น",
      "storeSubDescription": "ของรถคุณภาพดี เหมือนจริง เปิดประตูได้ทุกคัน",
      "storeDetail" : "loremsjflsofj ofuohfo afl haifh loacflowhlmlfoiwl",
      "storeCardImage": "https://fr.lnwfile.com/_/fr/_raw/d0/as/jw.jpg",
      "storeGallery" : [
        {"id" : 1,
      "imageUrl" : "https://fr.lnwfile.com/_/fr/_raw/d0/as/jw.jpg"},
      {"id" : 2,
      "imageUrl" : "https://fr.lnwfile.com/_/fr/_raw/d0/as/jw.jpg"},
      {"id" : 3,
      "imageUrl" : "https://fr.lnwfile.com/_/fr/_raw/d0/as/jw.jpg"}
      ]
      
    },
    {
      "storeId": 2,
      "storeTitle": "ร้านขายรถของเล่น",
      "storeSubDescription": "ของรถคุณภาพดี เหมือนจริง เปิดประตูได้ทุกคัน",
      "storeDetail" : "loremsjflsofj ofuohfo afl haifh loacflowhlmlfoiwl",
      "storeCardImage": "https://fr.lnwfile.com/_/fr/_raw/d0/as/jw.jpg",
      "storeGallery" : [
        {"id" : 1,
      "imageUrl" : "https://fr.lnwfile.com/_/fr/_raw/d0/as/jw.jpg"},
      {"id" : 2,
      "imageUrl" : "https://fr.lnwfile.com/_/fr/_raw/d0/as/jw.jpg"},
      {"id" : 3,
      "imageUrl" : "https://fr.lnwfile.com/_/fr/_raw/d0/as/jw.jpg"}
      ]
      
    },
    {
      "storeId": 3,
      "storeTitle": "ร้านขายรถของเล่น",
      "storeSubDescription": "ของรถคุณภาพดี เหมือนจริง เปิดประตูได้ทุกคัน",
      "storeDetail" : "loremsjflsofj ofuohfo afl haifh loacflowhlmlfoiwl",
      "storeCardImage": "https://fr.lnwfile.com/_/fr/_raw/d0/as/jw.jpg",
      "storeGallery" : [
        {"id" : 1,
      "imageUrl" : "https://fr.lnwfile.com/_/fr/_raw/d0/as/jw.jpg"},
      {"id" : 2,
      "imageUrl" : "https://fr.lnwfile.com/_/fr/_raw/d0/as/jw.jpg"},
      {"id" : 3,
      "imageUrl" : "https://fr.lnwfile.com/_/fr/_raw/d0/as/jw.jpg"}
      ]
      
    }]

    
    
    let tmp = result.filter(val => val.storeId === Number(storeId))[0]
    setStoreInfo(tmp);
    console.log(tmp)

    setLoading(false);
  }

  useEffect(() => {
    getBaseApi();
  }, [])


  return (

    <div>
      <Header />
      <Content style={{ backgroundColor: "#5f5f5f"}}>
        <article>
          <div style={{ paddingTop: 24, paddingBottom: 24, paddingLeft: "5%",paddingRight: "5%"}}>
            {!loading ?
            <Row gutter={16}>
              <Col xs={24} sm={8} md={6} lg={6}>
                <StoreDetail data={storeInfo ? storeInfo.storeDetail : "*" }/>
              </Col>

              <Col xs={24} sm={16} md={18} lg={18}>
              <Row gutter={16}>
                  <StoreGallery data={storeInfo ? storeInfo.storeGallery : []} />
                </Row>
              </Col>
            </Row>
            :
            <div style={{padding: "20%"}}>
              <center><Spin size="large"></Spin></center>
              </div>}

          </div>
        </article>
      </Content>
      <Footer />
    </div>
  )
}

export default Store