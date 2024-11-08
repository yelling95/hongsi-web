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
