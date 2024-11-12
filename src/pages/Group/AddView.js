import React, {useState, useMemo} from 'react'
import dayjs from 'dayjs'
import classNames from 'classnames'
import {BasicHeader, Button} from 'hongsi-ui'
import {useNavigate} from 'react-router-dom'

import './AddView.scss'

function AddView(props) {
  const navigate = useNavigate()

  const [category, setCategory] = useState(null)
  const [title, setTitle] = useState('')
  const [eventDtm, setEventDtm] = useState(new Date())
  const [local, setLocal] = useState(null)
  const [contents, setContents] = useState('')

  const handleSave = () => {}

  const isDone = useMemo(() => {
    return category !== null && title !== '' && eventDtm !== null && contents !== ''
  }, [category, title, eventDtm, contents])

  return (
    <div className="group_add_container">
      <BasicHeader title="모임 만들기" goBack={() => navigate(-1)} />
      <div className="guide_wrap"></div>

      <div className="fixed_bottom_wrap">
        <button className={classNames(isDone ? 'active' : '')} onClick={() => handleSave()}>
          모임 만들기
        </button>
      </div>
    </div>
  )
}

export default AddView
