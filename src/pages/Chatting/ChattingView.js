import React, {useEffect, useState, useRef} from 'react'
import dayjs from 'dayjs'
import {ChattingHeader, MoreOption, Chat, Chatting} from 'hongsi-ui'
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
  const param = useParams()
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
        goBack={() => navigate(-1)}
        openMore={() => setOpenMore(true)}
      />
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
            alert(o.id, o.url)
            setOpenMore(false)
          },
        }))}
      />
    </div>
  )
}

export default ChattingView
