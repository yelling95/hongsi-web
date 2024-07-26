import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {GalleryHeader, Sheet, GatherListItem, Button} from 'hongsi-ui'

import './ImageSearchView.scss'

function ImageSearchView(props) {
  const navigate = useNavigate()

  return (
    <div className="image_search_container">
      <div className="search_container">
        <GalleryHeader
          album="최근 항목"
          open={false}
          goBack={() => {
            navigate(-1)
          }}
          onSelectImage={() => {
            alert('완료!')
          }}
          onChangeAlbum={() => {}}
        />
        <div className="scroll_wrap"></div>
      </div>
    </div>
  )
}

export default ImageSearchView
