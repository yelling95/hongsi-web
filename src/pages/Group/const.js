export const SampleFeedOrderList = () => {
  return ['최신순', '인기순', '추천순'].map((keyword, index) => {
    return {
      id: index,
      label: keyword,
    }
  })
}
