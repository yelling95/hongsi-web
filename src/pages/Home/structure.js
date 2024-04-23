import {range} from 'lodash-es'

export const SliderOpt = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
}

export const DropdownOpt = {
  id: '',
  label: '',
  click: () => {},
}

export const SliderImage = {
  url: '',
  desc: '',
}

export const FeedMoreOptList = () => {
  return [
    {
      id: 'chat',
      label: '대화하기',
      url: '',
    },
    {
      id: 'report',
      label: '신고하기',
      url: '',
    },
  ]
}

export const SampleFeedFilterList = () => {
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

export const SampleFeedOrderList = () => {
  return ['최신순', '인기순', '추천순'].map((keyword, index) => {
    return {
      id: index,
      label: keyword,
    }
  })
}

export const SampleFeedList = range(1, 11, 1).map((dummy) => {
  return {
    id: dummy,
    profileUrl: '',
    username: '홍길동 ' + dummy,
    category: '',
    timing: '',
    title: '제목 ' + dummy,
    subtitle: '소제목 ' + dummy,
    likeCnt: 10,
    commentCnt: 3,
    gather: false,
    declare: false,
    imageList:
      dummy % 2 === 0
        ? range(1, 11, 1).map((n) => ({
            url: 'https://cdn.eroun.net/news/photo/201904/5248_19828_3216.jpg',
            desc: '사진 ' + n,
          }))
        : [],
  }
})
