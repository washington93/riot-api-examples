import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './app/store'

import Routes from './routes'

const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
)

export default App
