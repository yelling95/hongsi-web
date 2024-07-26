export const TabList = () => {
  return [
    {
      id: 'category',
      label: '주제별',
    },
    {
      id: 'area',
      label: '지역별',
    },
    {
      id: 'my',
      label: '내모임',
    },
  ]
}

export const TagList = () => {
  return [
    {
      id: '01',
      label: '전체',
    },
    {
      id: '02',
      label: 'AAA',
    },
    {
      id: '03',
      label: 'BBB',
    },
  ]
}

export const SampleFeedOrderList = () => {
  return ['최신순', '인기순', '추천순'].map((keyword, index) => {
    return {
      id: index,
      label: keyword,
    }
  })
}
