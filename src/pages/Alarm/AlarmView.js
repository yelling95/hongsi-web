import React, {useState} from 'react'
import {AlarmHeader, Icon, Feed, AlarmListItem, Sheet} from 'hongsi-ui'
import {useNavigate} from 'react-router-dom'
import {SampleAlarmList} from './structure'
import {map} from 'lodash-es'

import './Alarm.scss'

function AlarmView(props) {
  const navigate = useNavigate()

  const [alarmList, setAlarmList] = useState(SampleAlarmList)

  return (
    <div className="alarm_list_container">
      <AlarmHeader goBack={() => navigate(-1)} title="알림" goSetting={() => navigate('setting')} />
      <Sheet message="홍시에서 알려 드리는 유익한소식을 확인하세요" />
      <div className="list_wrap">
        {alarmList?.length > 0 ? (
          map(alarmList, (alarm) => <AlarmListItem key={`alarm-${alarm.id}`} {...alarm} />)
        ) : (
          <div className="empty_wrap">
            <Icon id="Notification" color="var(--grey-60)" />
            <label>알림이 없습니다.</label>
          </div>
        )}
      </div>
    </div>
  )
}

export default AlarmView
