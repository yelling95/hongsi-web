import React, {useState} from 'react'
import {Feed, MoreOption} from 'hongsi-ui'
import {SampleFeed} from './const'
import {FeedMoreOptList} from './structure'
import {Outlet, useNavigate} from 'react-router-dom'
import {map} from 'lodash-es'

import './View.scss'

function View(props) {
  const navigate = useNavigate()

  const [feed, setFeed] = useState(SampleFeed)
  const [isOpenMore, setOpenMore] = useState(false)
  const [moreOptions, setMoreOptions] = useState(FeedMoreOptList())

  const openFeedCommentPage = () => {
    navigate('comment')
  }

  return (
    <div className="feed_view_container">
      <Outlet />
      <Feed
        {...feed}
        textLimit={0}
        onClickComment={openFeedCommentPage}
        onClickMore={() => setOpenMore(true)}
      />
      <MoreOption
        id="more"
        isShow={isOpenMore}
        isShowDimm={true}
        close={() => setOpenMore(false)}
        options={map(moreOptions, (o) => ({
          ...o,
          click: () => {
            alert(o.id, o.url)
          },
        }))}
      />
    </div>
  )
}
export default View
