import React, {useMemo} from 'react'
import {useNavigate} from 'react-router-dom'
import {Profile, Tag, Button, Icon} from 'hongsi-ui'
import {ProfileMenus} from './const'
import {map, filter} from 'lodash-es'

import './Profile.scss'

function ProfileView(props) {
  const {notauth} = props
  const isNotAuthed = notauth === true
  const navigate = useNavigate()

  const categories = useMemo(() => {
    return filter(ProfileMenus, (category) => {
      if (isNotAuthed && category.auth) return false
      const menus = filter(category.menus, (menu) => {
        if (isNotAuthed && menu.auth) return false
        return true
      })
      category.menus = menus
      return true
    })
  }, [notauth])

  return (
    <div className="profile_view_container">
      <div className="person_wrap">
        <div className="profile_wrap">
          <Profile size="lg" />
          {isNotAuthed && (
            <div className="noauth_wrap">
              <div className="btn_login">
                <h1>로그인을 해주세요</h1>
                <Icon id="Left" />
              </div>
              <div className="message">로그인하고 새로운 친구들을 만나보세요</div>
            </div>
          )}
        </div>
        {!isNotAuthed && (
          <>
            <div className="introduce">
              <h1>프로등산러</h1>
              <pre>
                저는 등산이 취미인 50대 남자 입니다. 마포구에 살아요. 북한산을 자주 가는데 근처에
                사시면 언제든 같이가요~
              </pre>
            </div>
            <div className="tag_wrap">
              <Tag>일상</Tag>
              <Tag>운동 · 스포츠</Tag>
            </div>
            <div className="button_wrap">
              <Button onClick={() => navigate('edit')}>프로필 업데이트</Button>
            </div>
          </>
        )}
      </div>
      {map(categories, (category) => (
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
