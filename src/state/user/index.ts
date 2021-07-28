import { createSlice } from "@reduxjs/toolkit";
import axios from "axios/myAxios";

import { RootState, AppThunk } from "state/store";

interface UserData {
  Id: number;
  UserName: string;
  FullName: string;
  ClientRoles: any;
}

interface State {
  authenticated: boolean;
  userData: UserData | null;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  authenticated: false,
  userData: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.authenticated = false;
      state.userData = null;
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.authenticated = true;
      state.userData = action.payload;
      state.loading = false;
      state.error = null;
    },
    loginFailed: (state, action) => {
      state.authenticated = false;
      state.userData = null;
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      localStorage.clear();
      state.authenticated = false;
      state.userData = null;
      state.loading = false;
    },
  },
});

export const loginUserFetch =
  (body: any): AppThunk =>
  async (dispatch) => {
    dispatch(login());

    try {
      const { data } = await axios.post("/Authorization/SignIn", body);
      dispatch(loginSuccess({ ...data.User }));
      localStorage.setItem("token", data.AuthorizationToken.Token);
    } catch (error) {
      localStorage.clear();
      if (error.response) dispatch(loginFailed(error.response.data.Message));
    }
  };

export const authUser = (): AppThunk => async (dispatch) => {
  dispatch(login());

  try {
    const { data } = await axios.post(
      "/Users/GetProfile",
      {
        IncludeBranding: true,
        IncludeUploadFilesInfo: true,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    dispatch(
      loginSuccess({
        Id: data.Id,
        UserName: data.UserName,
        FullName: data.FullName,
        ClientRoles: [],
      })
    );
  } catch (err) {
    dispatch(logout());
  }
};

export const { login, loginSuccess, loginFailed, logout } = userSlice.actions;

export const selectAuth = (state: RootState) => state.user.authenticated;
export const selectData = (state: RootState) => state.user.userData;
export const selectLoading = (state: RootState) => state.user.loading;
export const selectError = (state: RootState) => state.user.error;

export default userSlice.reducer;
