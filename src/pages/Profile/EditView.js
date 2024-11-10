import React, {useState, useEffect, useRef} from 'react'
import {BasicHeader, Profile, TextField, TextArea, Button} from 'hongsi-ui'
import {useNavigate} from 'react-router-dom'
import {TagList} from './const'
import {map, includes} from 'lodash-es'
import className from 'classnames'

import './EditView.scss'

const HeaderHeight = 47
const ProfileHeight = 173
const ButtonHeight = 90

function EditView(props) {
  const navigate = useNavigate()
  const introduceRef = useRef()

  const [nickname, setNickname] = useState('')
  const [introduce, setIntroduce] = useState('')
  const [tags, setTags] = useState([])
  const [height, setHeight] = useState(HeaderHeight + ProfileHeight + 182 + ButtonHeight)

  const handleHeight = () => {
    if (introduce.length > 0 && introduceRef.current) {
      const inputHeight = introduceRef.current.clientHeight
      setHeight(HeaderHeight + ProfileHeight + inputHeight + ButtonHeight)
    }
  }

  useEffect(() => {
    handleHeight()
  }, [introduce])

  return (
    <div className="profile_edit_container">
      <BasicHeader goBack={() => navigate(-1)} title="프로필 업데이트" />
      <div className="profile_wrap">
        <Profile size="xlg" onSelectImage={() => {}} />
      </div>
      <div ref={introduceRef} className="introduce">
        <TextField
          value={nickname}
          placeholder="별명을 입력해주세요."
          label="별명"
          onChange={({id, value}) => setNickname(value)}
        />
        <TextArea
          type="resize"
          hasUnderline
          placeholder="소개글을 작성해주세요."
          label="소개"
          value={introduce}
          onKeyup={() => {}}
          onChange={({id, value}) => setIntroduce(value)}
        />
      </div>
      <div className="tag_select_wrap" style={{height: `calc(100% - ${height}px)`}}>
        {map(TagList, (tag, index) => (
          <div
            key={`tag-${index}`}
            className={className('tag', includes(tags, tag.id) && 'selected')}>
            {tag.name}
            {includes(tags, tag.id) && <Icon id="Check" color="var(--primary-orange)" />}
          </div>
        ))}
      </div>
      <div className="button_wrap">
        <Button>완료</Button>
      </div>
    </div>
  )
}

export default EditView
