import { Spin } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React, { useEffect, useState } from 'react'
import Cards from '../../container/Cards'
import Footer from '../../container/footer/Footer'
import Header from '../../container/header/Header'

function Home() {

  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false);

    const getBaseApi = async () => {
      setLoading(true);

      // const result = await getStoreAllFetch();
      setList([
        {
          "storeId":1,
          "storeTitle": "ร้านขายรถของเล่น",
          "storeSubDescription": "ของรถคุณภาพดี เหมือนจริง เปิดประตูได้ทุกคัน",
          "storeCardImage": "https://fr.lnwfile.com/_/fr/_raw/d0/as/jw.jpg"
        },
        {
          "storeId":2,
          "storeTitle": "ร้านขายรถของเล่น",
          "storeSubDescription": "ของรถคุณภาพดี เหมือนจริง เปิดประตูได้ทุกคัน",
          "storeCardImage": "https://fr.lnwfile.com/_/fr/_raw/d0/as/jw.jpg"
        },
        {
          "storeId":3,
          "storeTitle": "ร้านขายรถของเล่น",
          "storeSubDescription": "ของรถคุณภาพดี เหมือนจริง เปิดประตูได้ทุกคัน",
          "storeCardImage": "https://fr.lnwfile.com/_/fr/_raw/d0/as/jw.jpg"
        }
      ]);

      setLoading(false);
    }

  useEffect(() => {
    getBaseApi();
  },[])

  return (
    <div>
      <Header />
      <Content style={{backgroundColor: "#f5f5f5"}}>
      <article>
        <div style={{paddingLeft: "5%", paddingRight: "5%", paddingTop: 24}}>
          {!loading ?
          <Cards data={list} isShowSingle={false} />
        :
        <div style={{padding: "20%"}}>
          <center><Spin size="large" ></Spin></center>
        </div>
        }
        </div>
      </article>
      </Content>
      <Footer />
    </div>
  )
}

export default Home;
