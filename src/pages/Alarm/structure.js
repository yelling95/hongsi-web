import {range} from 'lodash-es'

export const SampleAlarmList = range(1, 6, 1).map((temp) => ({
  id: temp,
  isNew: temp === 1,
  title: '알림 제목이 표시됩니다 ' + temp,
  contents:
    '알림 내용이 표시됩니다. 알림 내용이 표시됩니다. 알림 내용이 표시됩니다. 알림 내용이 표시됩니다. ',
}))
