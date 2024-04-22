import React, {useState} from 'react'
import Slider from 'react-slick'
import {HomeHeader, Sheet, Footer, SortHeader, Feed, Dropdown} from 'hongsi-ui'
import {Menus} from './const'
import {SliderOpt, SampleFeedList, SampleFeedFilterList, SampleFeedOrderList} from './structure'
import {map} from 'lodash-es'

import './Slick.scss'
import './Home.scss'

function HomeView(props) {
  const [feedList, setFeedList] = useState(SampleFeedList)
  const [orderOptions, setOrderOptions] = useState(SampleFeedOrderList())
  const [filterOptions, setFilterOptions] = useState(SampleFeedFilterList())
  const [order, setOrder] = useState(orderOptions[0])
  const [filter, setFilter] = useState(filterOptions[0])
  const [isOpenOrder, setOpenOrder] = useState(false)
  const [isOpenFilter, setOpenFilter] = useState(false)

  return (
    <div className="home_container">
      <HomeHeader />
      <Sheet message="텍스트는 <br/>최대 두 줄까지 적어주세요" />
      <SortHeader
        order={order?.label}
        filter={filter?.label}
        onClickOrder={() => setOpenOrder(true)}
        onClickFilter={() => setOpenFilter(true)}
      />
      <div className="scroll_wrap">
        {map(feedList, (feed) => (
          <Feed key={`feed-${feed.id}`}>
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
      <Footer menuList={Menus} />
      <Dropdown
        id="order"
        isShow={isOpenOrder}
        isShowDimm={true}
        selected={order}
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
        selected={filter}
        close={() => setOpenFilter(false)}
        options={map(filterOptions, (o) => ({
          ...o,
          click: () => {
            alert(o.id)
          },
        }))}
      />
    </div>
  )
}

export default HomeView
