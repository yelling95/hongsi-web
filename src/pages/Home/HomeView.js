import React, {useState, useMemo} from 'react'
import Slider from 'react-slick'
import {Sheet, SortHeader, Feed, Dropdown, MoreOption} from 'hongsi-ui'
import {
  SliderOpt,
  SampleFeedList,
  SampleFeedFilterList,
  SampleFeedOrderList,
  FeedMoreOptList,
} from './structure'
import {map} from 'lodash-es'
import {Outlet, useLocation, useParams} from 'react-router-dom'

import './Slick.scss'
import './Home.scss'

function HomeView(props) {
  const [feedList, setFeedList] = useState(SampleFeedList)

  const [orderOptions, setOrderOptions] = useState(SampleFeedOrderList())
  const [filterOptions, setFilterOptions] = useState(SampleFeedFilterList())
  const [moreOptions, setMoreOptions] = useState(FeedMoreOptList())

  const [order, setOrder] = useState(orderOptions[0])
  const [filter, setFilter] = useState(filterOptions[0])
  const [feed, setFeed] = useState(null)

  const [isOpenOrder, setOpenOrder] = useState(false)
  const [isOpenFilter, setOpenFilter] = useState(false)
  const [isOpenMore, setOpenMore] = useState(false)

  const updateFeedLikeStatus = (feed, like = true) => {
    console.log(feed.id, like)
  }

  const openFeedCommentPage = (feed) => {
    setFeed(feed)
  }

  return (
    <div className="home_container">
      <Sheet message="텍스트는 <br/>최대 두 줄까지 적어주세요" />
      <SortHeader
        order={order?.label}
        filter={filter?.label}
        onClickOrder={() => setOpenOrder(true)}
        onClickFilter={() => setOpenFilter(true)}
      />
      <div className="scroll_wrap">
        {map(feedList, (feed) => (
          <Feed
            key={`feed-${feed.id}`}
            onClickLike={updateFeedLikeStatus}
            onClickComment={openFeedCommentPage}
            onClickMore={() => setOpenMore(true)}>
            {feed.imageList && feed.imageList.length > 0 && (
              <div className="slider_wrap" style={{height: 540}}>
                <Slider key={`slider-${feed.id}`} {...SliderOpt}>
                  {map(feed.imageList, (img, index) => (
                    <div key={`slider-img-${index}`} className="img_wrap">
                      <div style={{height: 540, backgroundImage: `url('${img.url}')`}}></div>
                    </div>
                  ))}
                </Slider>
              </div>
            )}
          </Feed>
        ))}
      </div>
      <Dropdown
        id="order"
        isShow={isOpenOrder}
        isShowDimm={true}
        selected={order?.id}
        close={() => setOpenOrder(false)}
        options={map(orderOptions, (o) => ({
          ...o,
          click: () => {
            alert(o.id)
          },
        }))}
      />
      <Dropdown
        id="filter"
        isShow={isOpenFilter}
        isShowDimm={true}
        selected={filter?.id}
        close={() => setOpenFilter(false)}
        options={map(filterOptions, (o) => ({
          ...o,
          click: () => {
            alert(o.id)
          },
        }))}
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

export default HomeView
