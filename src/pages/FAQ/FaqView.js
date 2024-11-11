import React, {useState} from 'react'
import {BasicHeader, Tag, Collapse, CollapseListItem, Sheet} from 'hongsi-ui'
import {useNavigate} from 'react-router-dom'
import {TagList} from './const'
import {map} from 'lodash-es'

import './Faq.scss'

function FaqView(props) {
  const navigate = useNavigate()

  const [tagList, setTagList] = useState(TagList)
  const [selectedTag, setSelectedTag] = useState(TagList[0])

  return (
    <div className="faq_container">
      <BasicHeader goBack={() => navigate(-1)} title="자주 묻는 질문" />
      <Sheet message="자주 묻는 질문 이외의 궁금한점은 고객센터로 연락주세요!" />
      <div className="scroll_wrap">
        <div className="tag_wrap">
          {map(tagList, (tag) => (
            <Tag
              key={tag.id}
              selected={selectedTag?.id === tag.id}
              onClick={() => setSelectedTag(tag)}>
              {tag.label}
            </Tag>
          ))}
        </div>
      </div>
      <div className="scroll_wrap">
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

export default FaqView
