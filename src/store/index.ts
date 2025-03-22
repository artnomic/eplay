import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'

import cartRedcer from './reducers/cart'

export const store = configureStore({
  reducer: {
    cart: cartRedcer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
