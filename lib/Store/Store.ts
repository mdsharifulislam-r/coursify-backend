import { configureStore } from '@reduxjs/toolkit'
import { CartSlice } from './features/CartSlice'
import { userSlice } from './features/UserSclice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        cartReduicer:CartSlice.reducer,
        userReduicer:userSlice.reducer
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']