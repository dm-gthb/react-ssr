import api from "../api";

export const FETCH_USERS = 'fetchUsers';

export const fetchUsers = () => async (dispatch) => {
  const users = await api.getUsers();
  dispatch({
    type: FETCH_USERS,
    payload: users
  });
};