import React, {useState, useEffect} from 'react'
import {ReadHeader, GatherListItem, IconButton, Button, Profile, Icon, GroupFeed} from 'hongsi-ui'
import {useNavigate} from 'react-router-dom'
import {SliderOpt} from './structure'
import {SampleImageList} from './const'
import Slider from 'react-slick'
import {map} from 'lodash-es'

import './View.scss'

function View(props) {
  const navigate = useNavigate()

  const [likeCnt, setLikeCnt] = useState(45)

  return (
    <div className="group_view_container">
      <ReadHeader goBack={() => navigate(-1)} openShard={() => {}} openMore={() => {}} />
      <div className="group_view_wrap">
        <div className="feed_wrap">
          <GroupFeed>
            <div className="slider_wrap" style={{height: 226}}>
              <Slider {...SliderOpt}>
                {map(SampleImageList, (img, index) => (
                  <div key={`slider-img-${index}`} className="img_wrap">
                    <div style={{height: 226, backgroundImage: `url('${img.url}')`}}></div>
                  </div>
                ))}
              </Slider>
            </div>
          </GroupFeed>
        </div>
        <div className="info_wrap">
          <label>모임 소개</label>
          <div>
            <Icon id="LocationPin" /> <span>마포구 북한동</span>
          </div>
          <div>
            <Icon id="Group" /> <span>2/4명</span>
          </div>
          <div>
            <Icon id="Calendar" /> <span>5월 1일(월) 오전 11시 30분</span>
          </div>
        </div>
        <div className="member_wrap">
          <label>멤버 소개 2/4명</label>
          <div className="member_list_wrap">
            <div className="member">
              <Profile size="md" />
              <div className="introduce">
                <h3>프로등산러</h3>
                <div>저는 등산이 취미인 50대 남자 입니다. 마포구에 거주해요.</div>
              </div>
            </div>
            <div className="member">
              <Profile size="md" />
              <div className="introduce">
                <h3>프로등산러</h3>
                <div>저는 등산이 취미인 50대 남자 입니다. 마포구에 거주해요.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="ask_wrap">
          <label>이런 모임도 있어요!</label>
          <GatherListItem size="sm" />
        </div>
        <div className="button_wrap">
          <div className="btn_like">
            <IconButton type="Like" onClick={() => {}} color="var(--grey-60)" />
            <label>{likeCnt}</label>
          </div>
          <Button>참여하기</Button>
        </div>
      </div>
    </div>
  )
}

export default View
