import React, {useState} from 'react'
import {Outlet, useLocation, useParams, useNavigate} from 'react-router-dom'
import {WriteHeader, Icon, Dropdown, TextField, TextArea, IconButton} from 'hongsi-ui'
import {SampleCategoryList} from './structure'
import {map} from 'lodash-es'

import './AddView.scss'

function AddView(props) {
  const [categoryOptions, setCategoryOptions] = useState(SampleCategoryList())
  const [isOpenCategory, setOpenCategory] = useState(false)
  const [category, setCategory] = useState(null)
  const [subject, setSubject] = useState('')
  const [contents, setContetns] = useState('')

  return (
    <div className="feed_add_container">
      <Outlet />
      <div className="add_container">
        <WriteHeader goBack={() => {}} writeUrl="/" title="글 작성" />
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
        <div className="bottom_choise_wrap">
          <IconButton type="Photo" color="#393939">
            사진
          </IconButton>
          <IconButton type="Group" color="#393939">
            모임
          </IconButton>
        </div>
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
