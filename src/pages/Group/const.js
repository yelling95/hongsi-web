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

export const SampleCategoryList = () => {
  return [
    '전체',
    '일상',
    '취미생활',
    '여행 · 맛집',
    '건강 · 다이어트',
    '운동 · 스포츠',
    '재태크 · 부동산',
    '문화 · 예술',
    '연애 · 결혼',
    '채용 · 커리어',
    '봉사활동',
    '같이해요',
  ].map((keyword, index) => {
    return {
      id: index,
      label: keyword,
    }
  })
}
