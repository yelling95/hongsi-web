export const Menus = [
  {
    id: 'home',
    path: '/home',
    icon: 'Home',
    active: true,
    unread: 0,
    onClick: () => {
      alert('home')
    },
  },
  {
    id: 'group',
    path: '/group',
    icon: 'Group',
    active: false,
    unread: 2,
    onClick: () => {
      alert('group')
    },
  },
  {
    id: 'chat',
    path: '/chat',
    icon: 'Chat',
    active: false,
    unreadStyle: 'number',
    unread: 4,
    onClick: () => {
      alert('chat')
    },
  },
  {
    id: 'mypage',
    path: '/mypage',
    icon: 'Account',
    active: false,
    unread: 4,
    onClick: () => {
      alert('mypage')
    },
  },
]
