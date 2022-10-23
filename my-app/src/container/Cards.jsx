import { Row, Col, Card } from 'antd'
// import Meta from 'antd/lib/card/Meta'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Cards.css'

const { Meta } = Card;

function Cards(props) {
  let navigate = useNavigate()

  const redirectToStore = (data) => {
    navigate(`/store?storeId=${data.storeId}`)
  }

  const genCardImage = (val) => {
    return (
      <div class="container">
        {val.storeCardImage ? (
          <img
            src={val.storeCardImage}
            alt="snow"
            style={{ width: '100%' }}
            onClick={() => redirectToStore(val)}
          ></img>
        ) : (
          <img
            src={``}
            alt="snow"
            style={{ width: '100%' }}
            onClick={() => redirectToStore(val)}
          ></img>
        )}
      </div>
    )
  }

  const genCardInfo = (val) => {
    return (
      <Row 
        style={{
          height: 100,
          padding: (props.isShowSingle ? "24px" : 0)
      }}
      onClick={() => redirectToStore(val)}>
        <Col span={24}>
          <Meta
          className='card-text course-item-text'
          title={val.storeTitle}
          description={val.storeSubDescription}
          />
        </Col>
      </Row>
    )
  }

  const genCard = (val) => {
    console.log("data: ", props.data);
    return (
      <Card
        hoverable={!props.isShowSingle}
        bodyStyle={{ padding: '10px' }}
        style={{
          width: '100%',
          borderRadius: 10,
        }}
        cover={props.isShowSingle ? genCardInfo(val) : genCardImage(val)}
      >
        {props.isShowSingle ? genCardImage(val) : genCardInfo(val)}
      </Card>
    )
  }

  return (
    <div>
      {props.isShowSingle ? (
        genCard(props.date)
      ) : (
        <>
          <label style={{ paddingLeft: 5 }}>รายการร้านค้า</label>
          <Row style={{ paddingTop: 10 }}>
            {props.data?.map((val) => {
              return (
                <Col
                  xs={24} //เป็นการตั้งค่าขนาดหน้าจอหากมีขนาดที่เปลี่ยนแปลง col เต็มเท่ากับ 24
                  sm={12}
                  md={12}
                  xl={6}
                  xxl={4}
                  style={{ paddingRight: 5, paddingBottom: 10 }}
                >
                  {genCard(val)}
                </Col>
              )
            })}
          </Row>
        </>
      )}
    </div>
  )
}

export default Cards;
