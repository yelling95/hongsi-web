import React, {useState} from 'react'
import {BasicHeader, Switch} from 'hongsi-ui'
import {useNavigate} from 'react-router-dom'

import './Setting.scss'

function SettingView(props) {
  const navigate = useNavigate()

  const [setting, setSetting] = useState({})

  const handleChange = (e) => {
    setSetting((prev) => ({...prev, [e.target.id]: e.target.checked}))
  }

  return (
    <div className="alarm_setting_container">
      <BasicHeader goBack={() => navigate(-1)} title="알림 설정" />
      <div className="setting_wrap">
        <h2>서비스 알림</h2>
        <Switch id="service" checked={setting.service} onChange={handleChange} />
      </div>
      <div className="setting_wrap">
        <h2>활동 알림</h2>
        <Switch id="activity" checked={setting.activity} onChange={handleChange} />
      </div>
      <div className="setting_wrap">
        <h2>이벤트,마케팅 정보 수신 동의</h2>
        <Switch id="event" checked={setting.event} onChange={handleChange} />
      </div>
      <div className="message">
        알림 수신을 ON상태로 설정 하셔야
        <br />
        다양한 혜택 및알림을 받으실 수 있습니다.
      </div>
    </div>
  )
}

export default SettingView
