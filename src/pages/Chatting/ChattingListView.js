import React, {useEffect, useState} from 'react'
import {Tab, ChattingListItem, Icon} from 'hongsi-ui'
import {Tabs} from './structure'
import {SampleChattingList} from './const'
import {map} from 'lodash-es'
import {Outlet, useNavigate} from 'react-router-dom'

import './Chatting.scss'

function ChattingListView(props) {
  const navigate = useNavigate()
  const [tab, setTab] = useState(Tabs[0])
  const [chattings, setChattings] = useState(SampleChattingList)

  useEffect(() => {
    if (tab.id === 'personal') {
      setChattings(SampleChattingList)
    } else {
      setChattings([])
    }
  }, [tab])

  return (
    <div className="chatting_list_container">
      <div className="tab_wrap">
        <Tab data={Tabs} selected={tab.id} onClick={(t) => setTab(t)} />
      </div>
      {chattings.length === 0 ? (
        <div className="empty_wrap">
          <Icon id="ChatEmpty" color="var(--grey-60)" />
          <label>{tab.empty}</label>
        </div>
      ) : (
        <div className="scroll_wrap">
          {map(SampleChattingList, (chat) => (
            <ChattingListItem
              key={`chatting-${chat.id}`}
              {...chat}
              onClick={() => navigate(`/chat/${chat.id}`)}
            />
          ))}
        </div>
      )}
      <Outlet />
    </div>
  )
}

export default ChattingListView
