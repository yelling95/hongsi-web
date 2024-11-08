import dayjs from 'dayjs'
import {random, range} from 'lodash-es'

export const SampleChattingList = range(1, 5, 1).map((row) => ({
  id: row,
  imgUrl: '',
  title: '프로등산러',
  lastMessage: '이번주는 청계산에 가려고 하는데 어디서 출발하실거에요?',
  timestamp: new Date(),
  memberCnt: random(),
  unreadCnt: random(),
}))

export const SampleChatting = (next) => {
  const sampleList = [
    {
      id: 0,
      username: '홍길동',
      imgUrl: '',
      message: '안녕하세요?',
      timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      mine: false,
    },
    {
      id: 1,
      username: '홍길동',
      imgUrl: '',
      message: '네~좋아요!!',
      timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      mine: false,
    },
    {
      id: 2,
      username: '홍길동',
      imgUrl: '',
      message: '아 그럴까요? 제가 아는 곳은 용산에 있는 맛집이예요~가격도 괜찮아요^^',
      timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      mine: false,
    },
    {
      id: 3,
      username: '홍길동',
      imgUrl: '',
      message: '네! 그래도 상관없어요~',
      timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      mine: false,
    },
    {
      id: 4,
      username: '홍길동',
      imgUrl: '',
      message: '어제 봤을때는 줄이 별로 안길었는데, 오늘은 어떨지 모르겠네요',
      timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      mine: false,
    },
    {
      id: 5,
      username: '홍길동',
      imgUrl: '',
      message: '혹시 달리기 잘하세요?',
      timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      mine: false,
    },
    {
      id: 6,
      username: '홍길동',
      imgUrl: '',
      message: '네ㅠㅠ좀 달려야될듯요',
      timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      mine: false,
    },
    {
      id: 7,
      username: '홍길동',
      imgUrl: '',
      message: '저는 좀 다리가 바보라ㅋㅋㅋㅋ',
      timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      mine: false,
    },
    {
      id: 8,
      username: '홍길동',
      imgUrl: '',
      message: '네~알겠습니다! 그럼 내일 뵐게요~',
      timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      mine: false,
    },
    {
      id: 9,
      username: '홍길동',
      imgUrl: '',
      message: '감사합니다!',
      timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      mine: false,
    },
  ]

  return sampleList[next]
}
