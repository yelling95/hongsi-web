import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {SearchHeader, Sheet, GatherListItem, Button} from 'hongsi-ui'

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
        <Sheet message="내가 찾는 모임을 검색해 보세요" />
        <div className="scroll_wrap">
          <GatherListItem onClick={() => {}} onClickLike={() => {}} size="lg" />
          <GatherListItem onClick={() => {}} onClickLike={() => {}} size="lg" />
          <GatherListItem onClick={() => {}} onClickLike={() => {}} size="lg" />
          <GatherListItem onClick={() => {}} onClickLike={() => {}} size="lg" />
          <GatherListItem onClick={() => {}} onClickLike={() => {}} size="lg" />
          <GatherListItem onClick={() => {}} onClickLike={() => {}} size="lg" />
          <GatherListItem onClick={() => {}} onClickLike={() => {}} size="lg" />
          <GatherListItem onClick={() => {}} onClickLike={() => {}} size="lg" />
        </div>
        <div className="button_wrap">
          <Button type="primary" size="lg" onClick={() => {}}>
            모임 추가하기
          </Button>
        </div>
      </div>
    </div>
  )
}

export default GroupSearchView
