import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {SearchHeader, TextButton} from 'hongsi-ui'

function FeedSearchView(props) {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="feed_search_container">
      <div className="search_container">
        <SearchHeader
          placeholder="검색"
          value={searchValue}
          goBack={() => {
            navigate(-1)
          }}
          onChange={({value}) => setSearchValue(value)}
        />
      </div>
      <div className="">
        <label>인기 검색어</label>
        <TextButton>모두 지우기</TextButton>
      </div>
    </div>
  )
}

export default FeedSearchView
