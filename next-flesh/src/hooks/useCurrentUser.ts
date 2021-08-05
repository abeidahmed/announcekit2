import { useContext } from "react"
import { SessionObject } from "../auth/interfaces"
import { CurrentUserContext } from "../providers/currentUser"
import {
  CurrentUserActionType,
  CurrentUserContextType,
} from "../stores/currentUser"

export const useCurrentUser = () => {
  const { currentUser, dispatch } = useContext(
    CurrentUserContext
  ) as CurrentUserContextType

  const setUser = (payload: SessionObject) => {
    return dispatch({
      type: CurrentUserActionType.SET_USER,
      payload: {
        id: payload.id,
        email: payload.attributes.email,
        token: payload.attributes.token,
      },
    })
  }

  const logout = () => {
    return dispatch({
      type: CurrentUserActionType.LOGOUT,
      payload: {
        id: "",
        email: "",
        token: "",
      },
    })
  }

  return { currentUser, setUser, logout }
}
