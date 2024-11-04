import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {IconButton, SearchHeader, TextButton} from 'hongsi-ui'
import {storage} from '../../helpers'
import {map} from 'lodash-es'

import './FeedSearch.scss'

function FeedSearchView(props) {
  const navigate = useNavigate()

  const [searchValue, setSearchValue] = useState('')
  const [keywords, setKeywords] = useState([])

  useEffect(() => {
    if (storage.get('keywords') && storage.get('keywords').length > 0) {
      setKeywords(storage.get('keywords'))
    }
  }, [storage.get('keywords')])

  useEffect(() => {
    return () => {
      storage.set('keywords', keywords)
    }
  }, [])

  useEffect(() => {
    console.log(keywords)
  }, [keywords])

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
          onEnter={(value) => {
            if (keywords && !keywords.includes(value)) {
              setKeywords((k) => {
                k.push(value)
                return k
              })
            }
          }}
        />
      </div>
      {keywords && keywords.length > 0 && (
        <div className="section">
          <div className="title">
            <label>최근 검색어</label>
            <TextButton>모두 지우기</TextButton>
          </div>
          <div className="lastest_wrap">
            {map(keywords, (keyword, index) => (
              <div className="keyword" key={`keyword-${index}`}>
                <label>{keyword}</label>
                <IconButton
                  type="Close"
                  color="#393939"
                  onClick={() => {
                    const newKeywords = keywords.filter((k) => k !== keyword)
                    setKeywords(newKeywords)
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="section">
        <div className="title">
          <label>인기 검색어</label>
        </div>
        <div className="rank_wrap">
          <div className="keyword">
            <em>1</em>
            <label>등산</label>
          </div>
          <div className="keyword">
            <em>2</em>
            <label>등산</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedSearchView
