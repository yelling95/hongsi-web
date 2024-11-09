import React from 'react'
import {Profile, Tag, Button} from 'hongsi-ui'
import {size} from 'lodash-es'
import {ProfileMenus} from './const'
import {map} from 'lodash-es'

import './Profile.scss'

function ProfileView(props) {
  return (
    <div className="profile_view_container">
      <div className="person_wrap">
        <div className="profile_wrap">
          <Profile size="lg" />
        </div>
        <div className="introduce">
          <h1>프로등산러</h1>
          <pre>
            저는 등산이 취미인 50대 남자 입니다. 마포구에 살아요. 북한산을 자주 가는데 근처에 사시면
            언제든 같이가요~
          </pre>
        </div>
        <div className="tag_wrap">
          <Tag>일상</Tag>
          <Tag>운동 · 스포츠</Tag>
        </div>
        <div className="button_wrap">
          <Button>프로필 업데이트</Button>
        </div>
      </div>
      {map(ProfileMenus, (category) => (
        <div key={`category-${category.id}`} className="menu_wrap">
          {map(category.menus, (menu) => (
            <div key={`menu-${menu.id}`} className="menu">
              {menu.name}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default ProfileView
