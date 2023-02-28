import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './generalfunction/function'
// import counterReducer from './youtubeAPI'
import {youtubeAPI} from './youtube/youtubeAPI'
// youtubeAPI
export default configureStore({

  reducer: {
    [youtubeAPI.reducerPath]: youtubeAPI.reducer,
    counter: counterReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(youtubeAPI.middleware),

})







// export const store = configureStore({
//   reducer: {},
// })

// import { configureStore } from '@reduxjs/toolkit'
// export  configureStore({
//   reducer: {
    
//   },
// })

