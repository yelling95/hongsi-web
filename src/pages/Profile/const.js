export const ProfileMenus = [
  {
    id: 'my',
    auth: true,
    menus: [
      {
        id: 'mypost',
        name: '작성한 글',
        link: '/mypost',
      },
      {
        id: 'saved',
        name: '찜한 글',
        link: '/mylike',
      },
      {
        id: 'mygroup',
        name: '내 모임',
        link: '/mygroup',
      },
    ],
  },
  {
    id: 'manage',
    menus: [
      {
        id: 'info',
        name: '회원 정보 관리',
        auth: true,
      },
      {
        id: 'notice',
        name: '공지사항',
      },
      {
        id: 'faq',
        name: '자주 묻는 질문',
      },
      {
        id: 'cs',
        name: '고객센터',
      },
      {
        id: 'ad',
        name: '제휴 문의',
      },
    ],
  },
  {
    id: 'setting',
    menus: [
      {
        id: 'alarm',
        name: '알림 설정',
      },
      {
        id: 'rule',
        name: '약관 및 정책',
      },
      {
        id: 'version',
        name: '앱버전',
      },
      {
        id: 'logout',
        name: '로그아웃',
        auth: true,
      },
    ],
  },
]

export const TagList = [
  {
    id: '01',
    name: '일상',
  },
  {
    id: '02',
    name: '모임 · 친구',
  },
  {
    id: '03',
    name: '일자리 · 알바',
  },
  {
    id: '04',
    name: '취미 · 관심사',
  },
  {
    id: '05',
    name: '액티비티 · 활동',
  },
  {
    id: '06',
    name: '혜택 · 정보',
  },
  {
    id: '07',
    name: '친구 · 친목',
  },
  {
    id: '08',
    name: '맛집 · 요리',
  },
  {
    id: '09',
    name: '취미',
  },
  {
    id: '10',
    name: '운동 · 스포츠',
  },
  {
    id: '11',
    name: '문화 · 예술',
  },
  {
    id: '12',
    name: '여행',
  },
  {
    id: '13',
    name: '교육 · 공부',
  },
  {
    id: '14',
    name: '봉사활동',
  },
]
