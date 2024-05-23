import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {WriteHeader, Sheet, GatherListItem, Button} from 'hongsi-ui'

import './ImageSearchView.scss'

function ImageSearchView(props) {
  const navigate = useNavigate()

  return (
    <div className="image_search_container">
      <div className="search_container">
        <WriteHeader
          goBack={() => {
            navigate(-1)
          }}
          writeUrl="/"
          title="글 작성"
        />
        <div className="scroll_wrap"></div>
      </div>
    </div>
  )
}

export default ImageSearchView
