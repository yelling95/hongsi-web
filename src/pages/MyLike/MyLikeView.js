import React, {useState} from 'react'
import {BasicHeader, Icon, Feed} from 'hongsi-ui'
import {useNavigate} from 'react-router-dom'
import {SampleFeedList} from './structure'
import {map} from 'lodash-es'

import './MyLike.scss'

function MyLikeView(props) {
  const navigate = useNavigate()

  const [feedList, setFeedList] = useState(SampleFeedList)

  return (
    <div className="mylike_container">
      <BasicHeader goBack={() => navigate(-1)} title="찜한 글" />
      {feedList?.length > 0 ? (
        map(feedList, (feed) => <Feed key={`feed-${feed.id}`} {...feed}></Feed>)
      ) : (
        <div className="empty_wrap">
          <Icon id="Like" color="var(--grey-60)" />
          <label>찜한 글이 없습니다.</label>
        </div>
      )}
    </div>
  )
}

export default MyLikeView
