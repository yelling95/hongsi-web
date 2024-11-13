import React, {useState, useEffect, useRef} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import {map, filter} from 'lodash-es'
import classNames from 'classnames'
import {SamplePhotoList, SampleAlbumList} from './const'
import {GalleryHeader, Gallery, Photo, AlbumList, AlbumListItem} from 'hongsi-ui'

import './ImageSearchView.scss'

function ImageSearchView(props) {
  const selection = useRef()
  const navigate = useNavigate()
  const location = useLocation()

  const [isOpenAlbum, setOpenAlbum] = useState(null)
  const [selectedAlbum, setSelectedAlbum] = useState(SampleAlbumList[0])
  const [defaultSelectedPhotos, setDefaultSelectedPhotos] = useState([])

  const onClickPhoto = (id) => {
    if (selection.current && selection.current.includes(id)) {
      selection.current = filter(selection.current, (p) => p !== id)
    } else {
      selection.current?.push(id)
    }
  }

  const onClickAlbum = (album) => {
    setSelectedAlbum(album)
    setOpenAlbum(false)
  }

  useEffect(() => {
    selection.current = []
  }, [])

  useEffect(() => {
    if (location.state?.images && location.state?.images.length > 0) {
      const defaultPhotoIds = map(location.state?.images, (image) => {
        selection.current?.push(image.id)
        return image.id
      })
      setDefaultSelectedPhotos(defaultPhotoIds)
    }
  }, [location.state?.images])

  return (
    <div className="image_search_container">
      <div className="search_container">
        <GalleryHeader
          album={selectedAlbum?.album}
          open={isOpenAlbum}
          goBack={() => {
            navigate(-1)
          }}
          onSelectImage={() => {
            const images = filter(SamplePhotoList, (photo) => selection.current.includes(photo.id))
            navigate(location.state?.from ? location.state.from : '/feed', {
              state: {
                ...location.state,
                images,
              },
            })
          }}
          onChangeAlbum={() => {
            setOpenAlbum(!isOpenAlbum)
          }}
        />
        <div className="view_wrap">
          {isOpenAlbum !== null && (
            <div className={classNames('album_wrap', isOpenAlbum === true && 'open')}>
              <AlbumList>
                {map(SampleAlbumList, (album, index) => (
                  <AlbumListItem
                    key={`album-${album.id}`}
                    {...album}
                    onClick={() => onClickAlbum(album)}
                  />
                ))}
              </AlbumList>
            </div>
          )}

          <div className="scroll_wrap">
            <Gallery>
              {map(SamplePhotoList, (photo, index) => (
                <Photo
                  key={`photo-${photo.id}`}
                  id={photo.id}
                  index={index}
                  defaultSelected={defaultSelectedPhotos.includes(photo.id)}
                  onClickPhoto={onClickPhoto}>
                  <img src={photo.src} />
                </Photo>
              ))}
            </Gallery>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageSearchView
