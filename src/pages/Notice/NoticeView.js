import React, {useState} from 'react'
import {BasicHeader, Tab, Collapse, CollapseListItem} from 'hongsi-ui'
import {useNavigate} from 'react-router-dom'
import {TabList} from './const'
import {map} from 'lodash-es'

import './Notice.scss'

function NoticeView(props) {
  const navigate = useNavigate()

  const [tab, setTab] = useState(TabList[0])

  return (
    <div className="notice_container">
      <BasicHeader goBack={() => navigate(-1)} title="공지사항" />
      <div className="scroll_wrap">
        <div className="tag_wrap">
          <Tab data={TabList} selected={tab.id} onClick={(t) => setTab(t)} />
        </div>
      </div>
      <div className="notice_list_wrap">
        <Collapse>
          <CollapseListItem />
          <CollapseListItem isNew />
          <CollapseListItem />
          <CollapseListItem />
        </Collapse>
      </div>
    </div>
  )
}

export default NoticeView
