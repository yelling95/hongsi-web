import {range} from 'lodash-es'

export const SampleGroupList = range(1, 10, 1).map((item) => ({
  id: item,
  size: 'lg',
  like: false,
  tagname: '친구 · 친목',
  title: '[등산모임] 1월 1일 일출 봅시다 오늘 저녁 모임 입니다!',
  local: '강남구',
}))

export const TagList = [
  {
    id: 'O',
    name: '운영 중',
  },
  {
    id: 'S',
    name: '대기 중',
  },
  {
    id: 'J',
    name: '참여 중',
  },
  {
    id: 'L',
    name: '찜한',
  },
  {
    id: 'L',
    name: '찜한',
  },
  {
    id: 'L',
    name: '찜한',
  },
  {
    id: 'L',
    name: '찜한',
  },
]
