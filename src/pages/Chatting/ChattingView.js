import React, {useEffect, useState, useRef} from 'react'
import dayjs from 'dayjs'
import {ChattingHeader, MoreOption, Chat, Chatting, Gather, GatherListItem, Icon} from 'hongsi-ui'
import {map} from 'lodash-es'
import {MoreOptList, ChattingFormat} from './structure'
import {useNavigate, useLocation, useParams} from 'react-router-dom'
import {SampleChatting} from './const'

import './ChattingView.scss'

const HeaderHeight = 47
const InputInitHeight = 74

function ChattingView(props) {
  const navigate = useNavigate()
  const location = useLocation()
  const {chatId} = useParams()
  const chattingRef = useRef(null)

  const [moreOptions, setMoreOptions] = useState(MoreOptList())
  const [isOpenMore, setOpenMore] = useState(false)
  const [value, setValue] = useState('')
  const [height, setHeight] = useState(HeaderHeight + InputInitHeight)
  const [list, setList] = useState([])
  const [isMulti, setMulti] = useState(false)
  const [next, setNext] = useState(0)

  const handleSave = () => {
    const temp = {
      ...ChattingFormat,
      message: value,
      mine: true,
    }
    setList((l) => [...l, temp])
    setValue('')
    setTimeout(sendFeedback, 3000)
  }

  const sendFeedback = () => {
    const temp = SampleChatting(next)
    setList((l) => [...l, temp])
    setNext((n) => n + 1)
  }

  const handleHeight = () => {
    if (value.length > 0 && chattingRef.current) {
      const inputHeight = chattingRef.current.clientHeight
      const messageHeight = HeaderHeight + inputHeight
      setHeight(messageHeight)
      setMulti(inputHeight > InputInitHeight)
    }
  }

  useEffect(() => {
    handleHeight()
  }, [value])

  return (
    <div className="chatting_view_container">
      <ChattingHeader
        alarmFg
        title="길동이"
        goBack={() => navigate('/chat')}
        openMore={() => setOpenMore(true)}
      />
      <div className="group_wrap">
        <GatherListItem size="sm" />
        <div className="alarm_wrap">
          <div className="message">
            <Icon id="Warning" color="#D64C00" fill width={17} height={17} viewBox="0 0 17 17" />
            <label>3건의 모임 신청이 있습니다.</label>
          </div>
          <div>
            <a>더보기</a>
          </div>
        </div>
      </div>
      <div className="message_wrap" style={{height: `calc(100% - ${height}px)`}}>
        <div className="date">{dayjs().format('YYYY년 M월 D일')}</div>
        <div className="part">
          {map(list, (chat, index) => (
            <Chat key={`message-${index}`} {...chat} />
          ))}
        </div>
      </div>
      <div className="input_wrap">
        <Chatting
          ref={chattingRef}
          value={value}
          onSave={handleSave}
          isMulti={isMulti}
          onChange={({value}) => setValue(value || '')}
          onKeyup={(e) => {
            if (e.code === 'Enter' && e.shiftKey === true) {
              handleHeight()
            } else if (e.code === 'Enter') {
              handleSave()
            }
          }}
        />
      </div>
      <MoreOption
        id="more"
        isShow={isOpenMore}
        isShowDimm={true}
        close={() => setOpenMore(false)}
        options={map(moreOptions, (o) => ({
          ...o,
          click: () => {
            setOpenMore(false)
            if (o.id === 'report') {
              setTimeout(() => {
                navigate(`${o.url}`, {
                  state: {
                    from: location.pathname,
                    chatId,
                  },
                })
              }, 300)
            }
          },
        }))}
      />
    </div>
  )
}

export default ChattingView
