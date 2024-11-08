import dayjs from 'dayjs'

export const Tabs = [
  {
    id: 'personal',
    label: '1:1 대화',
    empty: '진행중인 1:1 대화가 없습니다.',
  },
  {
    id: 'group',
    label: '모임 대화',
    empty: '모임에 참여하시면 대화가 시작됩니다',
  },
]

export const MoreOptList = () => {
  return [
    {
      id: 'modify',
      label: '채팅방 나가기',
      url: '',
    },
    {
      id: 'delete',
      label: '신고하기',
      url: 'chat/report',
    },
  ]
}

export const ChattingFormat = {
  id: 0,
  username: '',
  imgUrl: '',
  message: '',
  timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  mine: false,
}
