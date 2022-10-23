import { Card } from 'antd'
import React from 'react'

function StoreDetail(props) {
  return (
    <Card title="ข้อมูลร้านค้า" bordered={false}>
      <p>{props.data}</p>
    </Card>
  )
}

export default StoreDetail