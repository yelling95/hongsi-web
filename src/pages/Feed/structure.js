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

export const SliderOpt = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
}
