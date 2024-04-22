import React, {useState} from 'react'
import {HomeHeader, Sheet, Feed, Footer, SortHeader} from 'hongsi-ui'
import {Menus} from './const'
import {sampleFeedList} from './structure'
import {map} from 'lodash-es'

import './Home.scss'

function HomeView(props) {
  const [feedList, setFeedList] = useState(sampleFeedList)

  return (
    <div className="home_container">
      <HomeHeader />
      <Sheet message="텍스트는 <br/>최대 두 줄까지 적어주세요" />
      <SortHeader />
      <div className="scroll_wrap">
        {map(feedList, (feed) => (
          <Feed imgList={feed.imgList} />
        ))}
      </div>
      <Footer menuList={Menus} />
    </div>
  )
}

export default HomeView
