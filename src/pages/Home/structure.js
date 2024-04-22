import {range} from 'lodash-es'

export const sampleFeedList = range(1, 11, 1).map((dummy) => {
  return {
    profileUrl: '',
    username: '홍길동 ' + dummy,
    category: '',
    timing: '',
    imgList: [],
    title: '제목 ' + dummy,
    subtitle: '소제목 ' + dummy,
    likeCnt: 10,
    chatCnt: 3,
    gather: false,
    declare: false,
  }
})
