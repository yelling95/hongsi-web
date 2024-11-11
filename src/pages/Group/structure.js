import {range} from 'lodash-es'
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

export const TagList = {
  category: [
    {
      id: '01',
      label: '전체',
    },
    {
      id: '02',
      label: '친구·친목',
    },
    {
      id: '03',
      label: '맛집·요리',
    },
    {
      id: '04',
      label: '취미',
    },
  ],
  area: [
    {
      id: '01',
      label: '전체',
    },
    {
      id: '02',
      label: '서울',
    },
    {
      id: '03',
      label: '경기/인천',
    },
    {
      id: '04',
      label: '강원',
    },
    {
      id: '05',
      label: '경상/대구/부산',
    },
  ],
  my: [
    {
      id: 'OPERATE',
      label: '운영중',
    },
    {
      id: 'STANDBY',
      label: '대기중',
    },
    {
      id: 'JOINED',
      label: '참여중',
    },
    {
      id: 'LIKE',
      label: '찜한',
    },
    {
      id: 'LATEST',
      label: '최근본',
    },
  ],
}

export const MoreOptList = () => {
  return [
    {
      id: 'done',
      label: '모임 종료하기',
      url: '',
    },
  ]
}

export const SliderOpt = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
}
