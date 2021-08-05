import Cookies from "js-cookie"

export const TOKEN_NAME = "_announcekit"

export enum CurrentUserActionType {
  SET_USER = "SET_USER",
  LOGOUT = "LOGOUT",
}

export interface CurrentUserState {
  id: string
  email: string
  token: string
}

export interface CurrentUserContextType {
  currentUser: CurrentUserState
  dispatch: ({
    type,
    payload,
  }: {
    type: CurrentUserActionType
    payload: CurrentUserState
  }) => void
}

type CurrentUserActions =
  | { type: CurrentUserActionType.SET_USER; payload: CurrentUserState }
  | { type: CurrentUserActionType.LOGOUT; payload: CurrentUserState }

export const initialState: CurrentUserState = {
  id: "",
  email: "",
  token: "",
}

export const currentUserReducer = (
  state: CurrentUserState,
  action: CurrentUserActions
): CurrentUserState => {
  switch (action.type) {
    case CurrentUserActionType.SET_USER:
      Cookies.set(TOKEN_NAME, action.payload.token, { expires: 7 })
      return { ...state, ...action.payload }

    case CurrentUserActionType.LOGOUT:
      Cookies.remove(TOKEN_NAME)
      return { ...action.payload }

    default:
      throw new Error("Undefined type")
  }
}
