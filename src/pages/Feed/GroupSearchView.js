import React, {useState, useEffect} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import {SampleGroupList} from './const'
import {map} from 'lodash-es'
import {SearchHeader, Sheet, GatherListItem, Button} from 'hongsi-ui'

import './GroupSearchView.scss'

function GroupSearchView(props) {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchValue, setSearchValue] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <div className="group_search_container">
      <div className="search_container">
        <SearchHeader
          placeholder="모임 검색"
          value={searchValue}
          goBack={() => {
            navigate(-1)
          }}
          onChange={({value}) => setSearchValue(value)}
        />
        <Sheet message="내가 찾는 모임을 검색해 보세요" />
        <div className="scroll_wrap">
          {map(SampleGroupList, (group) => (
            <GatherListItem
              key={`group-search-${group.id}`}
              selected={selectedItem?.id === group.id}
              onClick={() => setSelectedItem(group)}
              onClickLike={() => {
                group.like = !group.like
              }}
              {...group}
            />
          ))}
        </div>
        <div className="button_wrap">
          <Button
            type="primary"
            size="lg"
            onClick={() => {
              navigate('/feed', {
                state: {
                  ...location.state,
                  group: selectedItem,
                },
              })
            }}>
            모임 추가하기
          </Button>
        </div>
      </div>
    </div>
  )
}

export default GroupSearchView
