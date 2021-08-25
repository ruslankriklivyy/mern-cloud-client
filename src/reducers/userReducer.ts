import { ThunkAction } from 'redux-thunk';
import { userAPI } from '../api/api';
import { IUserObj } from '../interfaces/interfaces';

const REGISTER_USER = 'REGISTER_USER';
const SET_IS_AUTH = 'SET_IS_AUTH';
const SET_CURRENT_USER = 'SET_CURRENT_USER';

const initialState = {
  currentUser: {} as any,
  isAuth: false as boolean,
};

export type InitialStateType = typeof initialState;
type Thunk = ThunkAction<Promise<void>, InitialStateType, unknown, ActionTypes>;

export const userReducer = (state = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

interface ISetIsAuth {
  type: typeof SET_IS_AUTH;
  payload: boolean;
}

export const setIsAuth = (isAuth: boolean): ISetIsAuth => ({
  type: SET_IS_AUTH,
  payload: isAuth,
});

interface ISetCurrentUser {
  type: typeof SET_CURRENT_USER;
  payload: boolean;
}

export const setCurrentUser = (currentUser: any): ISetCurrentUser => ({
  type: SET_CURRENT_USER,
  payload: currentUser,
});

interface IRegisterUser {
  type: typeof REGISTER_USER;
  payload: IUserObj;
}

export const registerUser =
  (userObj: IUserObj): Thunk =>
  async (dispatch) => {
    dispatch(setIsAuth(false));
    const { email, password } = userObj;
    const currentUser = userAPI.registration(email, password);
    dispatch(setCurrentUser(currentUser));
    dispatch(setIsAuth(true));
  };

type ActionTypes = IRegisterUser | ISetIsAuth | ISetCurrentUser;
