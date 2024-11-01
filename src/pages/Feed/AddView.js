import React, {useEffect, useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import Slider from 'react-slick'
import {
  WriteHeader,
  Icon,
  Dropdown,
  TextField,
  TextArea,
  IconButton,
  GatherListItem,
} from 'hongsi-ui'
import {SampleCategoryList, SliderOpt} from './structure'
import {map, filter, size} from 'lodash-es'

import './AddView.scss'

function AddView(props) {
  const navigate = useNavigate()
  const location = useLocation()

  const [categoryOptions, setCategoryOptions] = useState(SampleCategoryList())
  const [isOpenCategory, setOpenCategory] = useState(false)
  const [category, setCategory] = useState(null)
  const [subject, setSubject] = useState('')
  const [contents, setContetns] = useState('')
  const [images, setImages] = useState([])
  const [group, setGroup] = useState(null)

  const handleDeleteImage = (deleteImg) => {
    setImages(filter(images, (image) => image.id !== deleteImg.id))
  }

  useEffect(() => {
    if (location.state?.images && location.state?.images.length > 0) {
      setImages(location.state?.images)
    }
  }, [location.state?.images])

  useEffect(() => {
    if (location.state?.group) {
      setGroup({
        ...location.state?.group,
        size: 'md',
      })
    }
  }, [location.state?.group])

  return (
    <div className="feed_add_container">
      <WriteHeader
        goBack={() => {
          navigate('/')
        }}
        onSave={() => {
          alert('저장')
        }}
        title="글 작성"
      />
      <div className="add_container">
        <div className="write_wrap">
          <div className="category_selector" onClick={() => setOpenCategory(true)}>
            <label>{category ? category.label : '주제를 선택해주세요'}</label>
            <Icon id="Dropdown" width={20} height={20} color="#393939" />
          </div>
          <TextField
            id="subject"
            type="post"
            value={subject}
            placeholder="제목을 입력해주세요."
            onChange={({id, value}) => setSubject(value)}
          />
          <TextArea
            id="contents"
            placeholder="내용을 입력해주세요."
            onChange={({id, value}) => setContetns(value)}
          />
        </div>
        <div className="extra_wrap">
          {images && images.length > 0 && (
            <div className="slider_wrap" style={{height: 320}}>
              <Slider {...SliderOpt}>
                {map(images, (img, index) => (
                  <div key={`slider-img-${index}`} className="img_wrap">
                    <div className="control" onClick={() => handleDeleteImage(img)}>
                      <div className="delete">
                        <Icon id="Close" color="#ffffff" />
                      </div>
                    </div>
                    <div
                      className="img"
                      style={{height: 320, backgroundImage: `url('${img.src}')`}}></div>
                  </div>
                ))}
              </Slider>
            </div>
          )}
          {group && <GatherListItem {...group} />}
        </div>
      </div>
      <div className="bottom_choise_wrap">
        <IconButton
          type="Photo"
          color="#393939"
          onClick={() => navigate('/feed/search/image', {state: {images, group}})}>
          사진
        </IconButton>
        <IconButton
          type="Group"
          color="#393939"
          onClick={() => navigate('/feed/search/group', {state: {images, group}})}>
          모임
        </IconButton>
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
