export const FETCH_USERS = 'fetchUsers';
export const FETCH_ADMINS = 'fetchAdmins';
export const FETCH_CURRENT_USER = 'fetchCurrentUser';
export const AUTH_USER = 'authUser';
export const LOGOUT_USER = 'logoutUser';

export const fetchUsers = () => async (dispatch, getState, api) => {
  const users = await api.getUsers();
  
  dispatch({
    type: FETCH_USERS,
    payload: users
  });
};

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const user = await api.getCurrentUser();

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: user
  });
};

export const authUser = () => async (dispatch, getState, api) => {
  await api.authUser();

  dispatch({
    type: AUTH_USER,
  });
};

export const logoutUser = () => async (dispatch, getState, api) => {
  await api.logoutUser();

  dispatch({
    type: LOGOUT_USER,
  });
};

export const fetchAdmins = () => async (dispatch, getState, api) => {
  const admins =  await api.getAdmins();

  dispatch({
    type: FETCH_ADMINS,
    payload: admins
  });
};
