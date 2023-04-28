import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { persistor, store } from './Redux/store.jsx';

import { PersistGate } from "redux-persist/integration/react";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
