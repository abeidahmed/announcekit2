import { createContext, ReactNode, useReducer } from "react"
import {
  CurrentUserActionType,
  currentUserReducer,
  initialState,
} from "../stores/currentUser"

export const CurrentUserContext = createContext<CurrentUserActionType | any>(
  initialState
)

interface CurrentUserStoreProps {
  children: ReactNode
}

export function CurrentUserProvider({ children }: CurrentUserStoreProps) {
  const [state, dispatch] = useReducer(currentUserReducer, initialState)

  return (
    <CurrentUserContext.Provider value={{ currentUser: state, dispatch }}>
      {children}
    </CurrentUserContext.Provider>
  )
}
