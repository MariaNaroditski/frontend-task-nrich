import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import {
  initApp,
  loginFail,
  loginRequest,
  loginSuccess,
  logout,
  setIsAuthenticated,
} from "../../features/auth/authSlice";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: loginRequest,
  effect: (action, listenerApi) => {
    const { username, password } = action.payload;

    //Validate username and password. 
    //This should be an HTTP call when we have a server side.
    if (username === "admin" && password === "password") {
      localStorage.setItem("user", "token-user-loggedin");
      listenerApi.dispatch(loginSuccess());
    } else {
      listenerApi.dispatch(loginFail());
    }
  },
});

listenerMiddleware.startListening({
  actionCreator: logout,
  effect: () => localStorage.removeItem("user"),
});

listenerMiddleware.startListening({
  matcher: isAnyOf(initApp, loginSuccess),
  effect: (_, listenerApi) => {
    const token = localStorage.getItem("user");

    listenerApi.dispatch(setIsAuthenticated({ isAuthenticated: !!token }));
  },
});
