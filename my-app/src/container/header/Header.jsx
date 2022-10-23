import { PageHeader,Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Header.css"

export default function Header() {
  let navigate = useNavigate()
  return (
    <header>
      <nav className="header">
        <PageHeader
          title="PLearning"
          extra={[
            <Button key="1" type="text" onClick={() => navigate('/about')}>
              About
            </Button>
          ]}
          style={{
            backgroundColor: 'white',
            margin: 0,
            paddingBottom: 5,
            paddingLeft: 10,
            paddingRight: 5,
            paddingTop: 5,
          }}
          avatar={{
            src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4'
          }}
        />
      </nav>
    </header>
  )
}
