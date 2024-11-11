import {range} from 'lodash-es'

export const SampleFeedOrderList = () => {
  return ['최신순', '인기순', '추천순'].map((keyword, index) => {
    return {
      id: index,
      label: keyword,
    }
  })
}

export const SampleGroupList = range(1, 20, 1).map((item, index) => ({
  id: item,
  title: '타이틀은 두 줄 까지 작성하면 됩니다 ' + item,
  like: false,
}))

export const SampleImageList = range(1, 11, 1).map((n) => ({
  url: 'https://cdn.eroun.net/news/photo/201904/5248_19828_3216.jpg',
  desc: '사진 ' + n,
}))
