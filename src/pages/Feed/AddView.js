import React, {useState} from 'react'
import {Outlet, useLocation, useParams, useNavigate} from 'react-router-dom'
import {WriteHeader, Icon, Dropdown} from 'hongsi-ui'
import {SampleCategoryList} from './structure'
import {map} from 'lodash-es'

import './AddView.scss'

function AddView(props) {
  const [categoryOptions, setCategoryOptions] = useState(SampleCategoryList())
  const [isOpenCategory, setOpenCategory] = useState(false)
  const [category, setCategory] = useState(null)

  return (
    <div className="feed_add_container">
      <Outlet />
      <WriteHeader goBack={() => {}} writeUrl="/" title="글 작성" />
      <div className="category_selector" onClick={() => setOpenCategory(true)}>
        <label>{category ? category.label : '주제를 선택해주세요'}</label>
        <Icon id="Dropdown" width={20} height={20} color="#393939" />
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
