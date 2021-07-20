export const FETCH_USERS = 'fetchUsers';

export const fetchUsers = () => async (dispatch, getState, api) => {
  const users = await api.getUsers();
  
  dispatch({
    type: FETCH_USERS,
    payload: users
  });
};
