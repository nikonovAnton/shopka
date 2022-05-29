import { useSelector } from 'react-redux'
import { TypedUseSelectorHook } from 'react-redux'
import { store } from './store'

export type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
