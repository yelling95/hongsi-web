import {range} from 'lodash-es'

export const SampleFeedList = range(1, 11, 1).map((dummy) => {
  return {
    id: dummy,
    profileUrl: '',
    username: '홍길동',
    category: '일상',
    timing: '4일전',
    title: '등산 가실 분 구합니다!',
    subtitle:
      '이번주 금요일 한라산 등반을 가려고 합니다. 같이 가 실분 있으실까요? 저희 그룹에 참가하세요!',
    likeCnt: 10,
    commentCnt: 3,
    gather: false,
    declare: false,
    imageList: [],
  }
})
