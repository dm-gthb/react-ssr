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
    return new Promise((res, rej) => {
      setTimeout(() => res(this._users), 5000);
    });
  }
}

export default new MockAPI();