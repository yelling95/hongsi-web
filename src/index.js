import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import moment from 'moment'
import {Provider} from 'react-redux'
import {store} from './helpers'

import 'moment/locale/ko'
import './assets/base.scss'

moment.locale('ko')

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
