import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, persistor } from 'controller/redux/store/configureStore'
import { PersistGate } from 'redux-persist/integration/react'
import './i18n'
// CSS assets
import 'normalize.css'
import App from 'containers/app'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
