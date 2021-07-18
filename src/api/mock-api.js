class MockAPI {
  constructor() {
    this._users = [
      {id: '1', name: 'user a'},
      {id: '2', name: 'user b'},
      {id: '3', name: 'user c'},
      {id: '4', name: 'user d'},
    ]
  }

  getUsers() {
    return Promise.resolve(this._users);
  }
}

export default new MockAPI();