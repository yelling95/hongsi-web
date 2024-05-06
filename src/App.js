import React from 'react'
import {MainView, HomeView, CommentView, FeedAddView, GroupSearchView} from './pages'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './App.scss'

export default function App(props) {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainView />,
      children: [
        {
          id: 'home',
          path: '',
          element: <HomeView />,
        },
        {
          id: 'group',
          path: 'group',
          element: <div>group main</div>,
          children: [
            {
              id: 'group-member',
              path: 'member',
              element: <div>group member</div>,
            },
            {
              id: 'group-view',
              path: 'view',
              element: <div>group view</div>,
            },
            {
              id: 'group-join',
              path: 'join',
              element: <div>group join</div>,
            },
            {
              id: 'group-report',
              path: 'report',
              element: <div>group report</div>,
            },
            {
              id: 'group-add',
              path: 'add',
              element: <div>group add</div>,
              children: [
                {
                  id: 'group-add-address',
                  path: 'address',
                  element: <div>group add address</div>,
                },
              ],
            },
            {
              id: 'group-search',
              path: 'search',
              element: <div>group search</div>,
            },
          ],
        },
        {
          id: 'chat',
          path: 'chat',
          element: <div>chat main</div>,
          children: [
            {
              id: 'chat-o2o',
              path: 'o2o',
              element: <div>chat one to one</div>,
            },
            {
              id: 'chat-group',
              path: 'group',
              element: <div>chat group</div>,
            },
            {
              id: 'chat-view',
              path: 'view',
              element: <div>chat view</div>,
            },
            {
              id: 'chat-report',
              path: 'report',
              element: <div>chat report</div>,
            },
            {
              id: 'chat-search',
              path: 'search',
              element: <div>chat search</div>,
            },
          ],
        },
        {
          id: 'profile',
          path: 'profile',
          element: <div>profile default</div>,
          children: [
            {
              id: 'profile-edit',
              path: 'edit',
              element: <div>profile edit</div>,
            },
            {
              id: 'myinfo',
              path: 'myinfo',
              element: <div>myinfo</div>,
              children: [
                {
                  id: 'myinfo-phone',
                  path: 'phone',
                  element: <div>myinfo phone</div>,
                },
                {
                  id: 'myinfo-password',
                  path: 'password',
                  element: <div>myinfo password change</div>,
                },
                {
                  id: 'myinfo-nickname',
                  path: 'nickname',
                  element: <div>myinfo nickname</div>,
                },
              ],
            },
            {
              id: 'mypost',
              path: 'mypost',
              element: <div>mypost</div>,
            },
            {
              id: 'mylike',
              path: 'mylike',
              element: <div>mylike</div>,
            },
            {
              id: 'mygroup',
              path: 'mygroup',
              element: <div>mygroup</div>,
            },
            {
              id: 'alarm',
              path: 'alarm',
              element: <div>alarm</div>,
              children: [
                {
                  id: 'alarm-setting',
                  path: 'setting',
                  element: <div>alarm setting</div>,
                },
              ],
            },
            {
              id: 'notice',
              path: 'notice',
              element: <div>notice</div>,
            },
            {
              id: 'fnq',
              path: 'fnq',
              element: <div>fnq</div>,
            },
            {
              id: 'customer',
              path: 'customer',
              element: <div>customer</div>,
            },
            {
              id: 'partnership',
              path: 'partnership',
              element: <div>partnership</div>,
            },
          ],
        },
      ],
    },
    {
      path: 'signup',
      children: [
        {
          id: 'signup',
          path: '',
          element: <div>signup main</div>,
          children: [
            {
              id: 'signup-email',
              path: 'email',
              element: <div>signup email</div>,
            },
            {
              id: 'signup-password',
              path: 'password',
              element: <div>signup password</div>,
            },
            {
              id: 'signup-phone',
              path: 'phone',
              element: <div>signup phone</div>,
            },
            {
              id: 'signup-nickname',
              path: 'nickname',
              element: <div>signup nickname</div>,
            },
          ],
        },
        {
          id: 'signup-link',
          path: 'link',
          element: <div>signup link</div>,
        },
      ],
    },
    {
      path: 'signin',
      children: [
        {
          id: 'signin-01',
          path: '01',
          element: <div>signin 01</div>,
        },
        {
          id: 'signin-02',
          path: '02',
          element: <div>signin 02</div>,
        },
        {
          id: 'signin-default',
          path: 'default',
          element: <div>signin default</div>,
        },
      ],
    },
    {
      id: 'password',
      path: 'password',
      children: [
        {
          id: 'password-reset',
          path: 'reset',
          element: <div>password reset</div>,
        },
      ],
    },
    {
      id: 'feed',
      path: 'feed/:feedId',
      element: <div>feed view</div>,
      children: [
        {
          id: 'comment',
          path: 'comment',
          element: <CommentView />,
        },
        {
          id: 'comment-report',
          path: 'comment/report',
          element: <div>report</div>,
        },
      ],
    },
    {
      id: 'feed-add',
      path: 'feed',
      element: <FeedAddView />,
    },
    {
      id: 'feed-group-search',
      path: 'feed/search/group',
      element: <GroupSearchView />,
    },
    {
      id: 'feed-image-search',
      path: 'feed/search/image',
      element: <div>feed image search</div>,
    },
    {
      id: 'feed-search',
      path: 'search',
      element: <div>feed search</div>,
    },
  ])

  return (
    <div className="app_container">
      <RouterProvider router={router} />
    </div>
  )
}
