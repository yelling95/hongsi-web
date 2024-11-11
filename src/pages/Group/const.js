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
