import React, {useEffect, useState, useMemo} from 'react'
import {useNavigate} from 'react-router-dom'
import {IconButton, SearchHeader, TextButton, Feed, Icon} from 'hongsi-ui'
import {storage, useThrottle} from '../../helpers'
import {map, filter} from 'lodash-es'

import './ChatSearch.scss'

function ChatSearchView(props) {
  const navigate = useNavigate()
  const savedKeywords = storage.get('keywords')
  const {throttle, throttleClear} = useThrottle()

  const [searchValue, setSearchValue] = useState('')
  const [searchKeyword, setSearchKeyword] = useState('')
  const [keywords, setKeywords] = useState([])

  const deleteAll = () => {
    setKeywords([])
    storage.set('keywords', [])
  }

  const deleteKeyword = (keyword) => {
    const newKeywords = keywords.filter((k) => k !== keyword)
    setKeywords(newKeywords)
    storage.set('keywords', newKeywords)
  }

  const addKeyword = (value) => {
    if (value !== '' && keywords && !keywords.includes(value)) {
      const newKeywords = [value, ...keywords]
      setKeywords(newKeywords)
      storage.set('keywords', newKeywords)
    }
    setSearchValue('')
    setSearchKeyword(value)
  }

  const clickKeyword = (keyword) => {
    addKeyword(keyword)
    setSearchValue(keyword)
  }

  useEffect(() => {
    if (savedKeywords && savedKeywords.length > 0) {
      setKeywords(savedKeywords)
    }
  }, [])

  return (
    <div className="chat_search_container">
      <div className="search_container">
        <SearchHeader
          placeholder="검색"
          value={searchValue}
          goBack={() => {
            navigate(-1)
          }}
          onChange={({value}) => setSearchValue(value)}
          onEnter={addKeyword}
          hasEndAdornment={true}
          endAdornmentEl={
            <Icon
              id="Delete"
              color="var(--grey-60)"
              width={18}
              height={18}
              viewBox="0 0 18 18"
              onClick={() => clickKeyword('')}
            />
          }
        />
      </div>
      <div className="section_wrap">
        {keywords && keywords.length > 0 ? (
          <div className="section">
            <div className="title">
              <label>최근 검색어</label>
              <TextButton onClick={deleteAll}>모두 지우기</TextButton>
            </div>
            <div className="lastest_wrap">
              {map(keywords, (keyword, index) => (
                <div className="keyword" key={`keyword-${index}`}>
                  <label onClick={() => clickKeyword(keyword)}>{keyword}</label>
                  <IconButton type="Close" color="#393939" onClick={() => deleteKeyword(keyword)} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="result_wrap">
            <div className="empty_wrap">
              <Icon id="ChatEmpty" color="var(--grey-60)" />
              <label>찾고 싶은 대화 내용을 검색해 보세요!</label>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatSearchView
