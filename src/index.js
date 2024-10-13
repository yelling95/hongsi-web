import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import dayjs from 'dayjs'
import {Provider} from 'react-redux'
import {store} from './helpers'

import 'dayjs/locale/ko'

import './assets/color.scss'
import './assets/font.scss'
import './assets/anim.scss'
import './assets/base.scss'

dayjs.locale('ko')

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
