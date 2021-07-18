import mockApi from '../../api/mock-api';

export const FETCH_USERS = 'fetchUsers';

export const fetchUsers = () => async (dispatch) => {
  const users = await mockApi.getUsers();
  dispatch({
    type: FETCH_USERS,
    payload: users
  })
};