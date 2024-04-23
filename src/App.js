import React from 'react'
import {HomeView, CommentView} from './pages'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

export default function App(props) {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeView />,
    },
    {
      path: 'comment',
      element: <CommentView />,
    },
  ])

  return <RouterProvider router={router} />
}
