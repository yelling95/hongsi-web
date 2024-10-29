import {range} from 'lodash-es'

export const SampleGroupList = range(1, 10, 1).map(item => (
  {
    id: item,
    size: 'lg',
    like: false,
    tagname: '친구 · 친목',
    title: '[등산모임] 1월 1일 일출 봅시다 오늘 저녁 모임 입니다!',
    local: '강남구'
  }
))