import React, {useMemo} from 'react'
import {HomeHeader, ProfileHeader, Footer} from 'hongsi-ui'
import {FooterMenus} from './const'
import {Outlet, useLocation, useParams, useNavigate} from 'react-router-dom'
import {map} from 'lodash-es'

import './Main.scss'

function MainView(props) {
  const location = useLocation()
  const navigate = useNavigate()

  const nav = useMemo(() => {
    const {pathname} = location
    return map(FooterMenus, (menu) => {
      let active = false

      if (menu.path === '/' && pathname === '/') {
        active = true
      } else if (menu.path !== '/' && pathname.indexOf(menu.path) > -1) {
        active = true
      }

      return {
        ...menu,
        active,
        onClick: () => {
          navigate(menu.path)
        },
      }
    })
  }, [location])

  const isProfile = useMemo(() => {
    return location.pathname === '/profile'
  }, [location])

  return (
    <div className="main_container">
      {isProfile ? (
        <ProfileHeader alarmUrl="/alarm" />
      ) : (
        <HomeHeader editUrl="/feed" searchUrl="/search" />
      )}
      <Outlet />
      <Footer menuList={nav} />
    </div>
  )
}

export default MainView
