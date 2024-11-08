import {random} from 'lodash-es'

export const CommentFormat = {
  id: random(),
  profileUrl: '',
  username: '홍길동',
  timing: '1분전',
  likeCnt: 4,
  like: false,
  deleted: false,
  declare: false,
  message: '',
}

export const MoreOptList = () => {
  return [
    {
      id: 'modify',
      label: '수정하기',
      url: '',
    },
    {
      id: 'delete',
      label: '삭제하기',
      url: '',
    },
  ]
}
