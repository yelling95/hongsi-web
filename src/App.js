import React from 'react'
import {
  MainView,
  HomeView,
  CommentView,
  FeedAddView,
  FeedView,
  GroupSearchView,
  ImageSearchView,
  FeedSearchView,
  GroupView,
  SigninView,
  SimpleSigninView,
  SimpleSigninExistView,
  SignupView,
  SignupEmailView,
  SignupPasswordView,
  SignupPhoneView,
  SignupNicknameView,
  ResetPasswordView,
  ChattingListView,
  ChattingView,
  ReportView,
  ProfileView,
  ChatSearchView,
  ProfileEditView,
  MyPostView,
  MyLikeView,
  MyGroupView,
  AlarmView,
  AlarmSettingView,
  NoticeView,
  FaqView,
  CsView,
  GroupDetailView,
  GroupJoinView,
  GroupAddView,
} from './pages'
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
          element: <GroupView />,
          children: [
            {
              id: 'group-member',
              path: 'member',
              element: <div>group member</div>,
            },

            {
              id: 'group-report',
              path: 'report',
              element: <div>group report</div>,
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
          element: <ChattingListView />,
        },
        {
          id: 'profile',
          path: 'profile',
          element: <ProfileView />,
          children: [
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
          ],
        },
        {
          id: 'profile-notauth',
          path: 'profile/notauth',
          element: <ProfileView notauth />,
        },
      ],
    },
    {
      path: 'signin',
      children: [
        {
          id: 'signin',
          path: '',
          element: <SigninView />,
        },
        {
          id: 'signin-simple-01',
          path: 'simple/01',
          element: <SimpleSigninView type="01" />,
        },
        {
          id: 'signin-simple-02',
          path: 'simple/02',
          element: <SimpleSigninView type="02" />,
        },
        {
          id: 'signin-exist-kakao',
          path: 'exist/kakao',
          element: <SimpleSigninExistView vendor="kakao" />,
        },
        {
          id: 'signin-exist-naver',
          path: 'exist/naver',
          element: <SimpleSigninExistView vendor="naver" />,
        },
      ],
    },
    {
      path: 'signup',
      children: [
        {
          id: 'signup',
          path: '',
          element: <SignupView />,
          children: [
            {
              id: 'signup-email',
              path: 'email',
              element: <SignupEmailView />,
            },
            {
              id: 'signup-password',
              path: 'password',
              element: <SignupPasswordView />,
            },
            {
              id: 'signup-phone',
              path: 'phone',
              element: <SignupPhoneView />,
            },
            {
              id: 'signup-nickname',
              path: 'nickname',
              element: <SignupNicknameView type="01" />,
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
      id: 'password',
      path: 'password',
      children: [
        {
          id: 'password-reset',
          path: 'reset',
          element: <ResetPasswordView />,
        },
      ],
    },
    {
      id: 'feed',
      path: 'feed/:feedId',
      element: <FeedView />,
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
      element: <ImageSearchView />,
    },
    {
      id: 'feed-search',
      path: 'search',
      element: <FeedSearchView />,
    },
    {
      id: 'chat-view',
      path: 'chat/:chatId',
      element: <ChattingView />,
    },
    {
      id: 'chat-report',
      path: 'chat/report',
      element: <ReportView />,
    },
    {
      id: 'chat-search',
      path: 'chat/search',
      element: <ChatSearchView />,
    },
    {
      id: 'profile-edit',
      path: 'profile/edit',
      element: <ProfileEditView />,
    },
    {
      id: 'mypost',
      path: 'mypost',
      element: <MyPostView />,
    },
    {
      id: 'mylike',
      path: 'mylike',
      element: <MyLikeView />,
    },
    {
      id: 'mygroup',
      path: 'mygroup',
      element: <MyGroupView />,
    },
    {
      id: 'alarm',
      path: 'alarm',
      element: <AlarmView />,
    },
    {
      id: 'alarm-setting',
      path: 'alarm/setting',
      element: <AlarmSettingView />,
    },
    {
      id: 'notice',
      path: 'notice',
      element: <NoticeView />,
    },
    {
      id: 'faq',
      path: 'faq',
      element: <FaqView />,
    },
    {
      id: 'cs',
      path: 'cs',
      element: <CsView />,
    },
    {
      id: 'partnership',
      path: 'partnership',
      element: <div>partnership</div>,
    },
    {
      id: 'group-view',
      path: 'group/:groupId',
      element: <GroupDetailView />,
    },
    {
      id: 'group-join',
      path: 'group/join',
      element: <GroupJoinView />,
    },
    {
      id: 'group-add',
      path: 'group/add',
      element: <GroupAddView />,
      children: [
        {
          id: 'group-add-address',
          path: 'address',
          element: <div>group add address</div>,
        },
      ],
    },
    {
      id: 'group-image-search',
      path: 'group/search/image',
      element: <ImageSearchView />,
    },
  ])

  return (
    <div className="app_container">
      <RouterProvider router={router} />
    </div>
  )
}
