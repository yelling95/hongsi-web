import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {SearchHeader, Sheet, GatherListItem} from 'hongsi-ui'

import './GroupSearchView.scss'

function GroupSearchView(props) {
  const navigate = useNavigate()

  return (
    <div className="group_search_container">
      <div className="search_container">
        <SearchHeader
          goBack={() => {
            navigate(-1)
          }}
        />
        <Sheet message="모임 홍보나 모임 후기 작성을 원하시면 모임을 선택해 주세요" />
        <div className="scroll_wrap">
          <GatherListItem onClick={() => {}} onClickLike={() => {}} size="lg" />
          <GatherListItem onClick={() => {}} onClickLike={() => {}} size="lg" />
          <GatherListItem onClick={() => {}} onClickLike={() => {}} size="lg" />
        </div>
      </div>
    </div>
  )
}

export default GroupSearchView
