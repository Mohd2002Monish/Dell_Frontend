import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SET_SESSION,
} from "./ActionTypes";
import axios from "axios";

export const login = (user) => async (dispatch) => {
 
  try {
    dispatch({
      type: LOGIN_LOADING,
    });
    const { data } = await axios.post("http://localhost:8080/signin", user);
    console.log("data: ", data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_ERROR,
      payload: error.response.data.message,
    });
  }
};

export const signup = (user) => async (dispatch) => {
  console.log("user: ", user);
  try {
    dispatch({
      type: SIGNUP_LOADING,
    });
    const { data } = await axios.post("http://localhost:8080/signup", user);
    console.log("data: ", data);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SIGNUP_ERROR,
      payload: error.response.data.message,
    });
  }
};

export const setSession = (user) => async (dispatch) => {
  try {
    const res = await axios.get("/api/auth/session");
    dispatch({
      type: SET_SESSION,
      payload: res.data.user,
    });
  } catch (error) {
    console.log("error: ", error);
  }
};
