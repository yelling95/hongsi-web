import React, {useState, useMemo, useRef, useEffect} from 'react'
import dayjs from 'dayjs'
import classNames from 'classnames'
import {BasicHeader, Button, Icon, Dropdown, TextField, TextArea} from 'hongsi-ui'
import {useNavigate, useLocation} from 'react-router-dom'
import {SampleCategoryList} from './const'
import {useWindowSize} from '../../helpers'
import {map, filter} from 'lodash-es'

import CameraIcon from './Camera'

import './AddView.scss'

const HeaderHeight = 47
const AddHeight = 112
const InfoHeight = 207
const PhotoHeight = 100
const ButtonHeight = 50

function AddView(props) {
  const [windowWidth, windowHeight] = useWindowSize()
  const navigate = useNavigate()
  const location = useLocation()
  const contentsRef = useRef()

  const [categoryOptions, setCategoryOptions] = useState(SampleCategoryList())
  const [isOpenCategory, setOpenCategory] = useState(false)
  const [category, setCategory] = useState(null)
  const [subject, setSubject] = useState('')
  const [contents, setContetns] = useState('')
  const [images, setImages] = useState([])
  const [eventDtm, setEventDtm] = useState(new Date())
  const [local, setLocal] = useState(null)
  const [member, setMember] = useState(1)

  const handleSave = () => {}

  const isDone = useMemo(() => {
    return category !== null && subject !== '' && eventDtm !== null && contents !== ''
  }, [category, subject, eventDtm, contents])

  const contentsHeight = useMemo(() => {
    if (windowHeight === 0) return null
    return windowHeight - HeaderHeight - AddHeight - InfoHeight - PhotoHeight - ButtonHeight
  }, [windowHeight])

  const handleDeleteImage = (deleteImg) => {
    setImages(filter(images, (image) => image.id !== deleteImg.id))
  }

  useEffect(() => {
    if (location.state?.category) {
      setCategory(location.state.category)
    }
    if (location.state?.subject) {
      setSubject(location.state.subject)
    }
    if (location.state?.eventDtm) {
      setEventDtm(location.state.eventDtm)
    }
    if (location.state?.member) {
      setMember(location.state.member)
    }
    if (location.state?.local) {
      setLocal(location.state.local)
    }
    if (location.state?.contents) {
      setContetns(location.state.contents)
    }
    if (location.state?.images && location.state?.images.length > 0) {
      setImages(location.state.images)
    }
  }, [location.state])

  return (
    <div className="group_add_container">
      <BasicHeader title="모임 만들기" goBack={() => navigate(-1)} />
      <div className="add_wrap">
        <div className="category_selector" onClick={() => setOpenCategory(true)}>
          <label>{category ? category.label : '주제를 선택해주세요'}</label>
          <Icon id="Dropdown" width={20} height={20} color="#393939" />
        </div>
        <TextField
          value={subject}
          placeholder="어떤 모임을 만들까요?"
          onChange={({id, value}) => setSubject(value)}
        />
      </div>
      <div className="info_wrap">
        <div>
          <div className="label">
            <Icon id="Calendar" /> 일정
          </div>
          <div>{dayjs(eventDtm).format('M월 D일(dd) A H시 m분')}</div>
        </div>
        <div>
          <div className="label">
            <Icon id="Group" /> 인원
          </div>
          <div className="counter">
            <Icon
              id="MinusCount"
              width={19}
              height={19}
              viewBox="0 0 19 19"
              onClick={() => setMember((m) => (m > 1 ? m - 1 : m))}
            />
            <span>{member}명</span>
            <Icon
              id="PlusCount"
              width={19}
              height={19}
              viewBox="0 0 19 19"
              onClick={() => setMember((m) => m + 1)}
            />
          </div>
        </div>
        <div>
          <div className="label">
            <Icon id="LocationPin" /> 장소
          </div>
          <div>{local ? local : '미정'}</div>
        </div>
      </div>
      <div className="contents_wrap" ref={contentsRef} style={{height: contentsHeight}}>
        {contentsHeight && (
          <TextArea
            id="contents"
            defaultValue={contents}
            placeholder="활동 내용을 입력해주세요."
            style={{height: contentsHeight - 40}}
            onKeyup={() => {}}
            onChange={({id, value}) => setContetns(value)}
          />
        )}
      </div>
      <div className="photo_wrap">
        <div
          className="btn_take_photo"
          onClick={() =>
            navigate('/group/search/image', {
              state: {
                from: '/group/add',
                category,
                subject,
                eventDtm,
                member,
                local,
                contents,
                images,
              },
            })
          }>
          <CameraIcon />
          <span>
            <em>{images.length}</em>/10
          </span>
        </div>
        {map(images, (img, index) => (
          <div
            className="thumnail"
            key={`thumnail-${index}`}
            style={{backgroundImage: `url('${img.src}')`}}>
            <div className="delete" onClick={() => handleDeleteImage(img)}></div>
          </div>
        ))}
      </div>
      <div className="fixed_bottom_wrap">
        <button className={classNames(isDone ? 'active' : '')} onClick={() => handleSave()}>
          모임 만들기
        </button>
      </div>
      <Dropdown
        id="category"
        isShow={isOpenCategory}
        isShowDimm={true}
        selected={category?.id}
        close={() => setOpenCategory(false)}
        options={map(categoryOptions, (o) => ({
          ...o,
          click: () => {
            setCategory(o)
            setOpenCategory(false)
          },
        }))}
      />
    </div>
  )
}

export default AddView
