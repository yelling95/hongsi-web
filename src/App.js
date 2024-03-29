import React from 'react'
import {HomeView} from './pages'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

export default function App(props) {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeView />,
    },
  ])

  return <RouterProvider router={router} />
}
