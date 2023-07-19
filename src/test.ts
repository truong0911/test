export class MockService {
  private users = [
    {
      id: '1',
      username: 't',
      password: 'p',
      fullname: 'tt',
      dateOfBirth: new Date('2023-2-14'),
      gender: '1',
    },
    {
      id: '2',
      username: 't',
      password: 'k',
      fullname: 'tt',
      dateOfBirth: new Date('2023-2-14'),
      gender: '1',
    },
  ];

  findAll() {
    return this.users;
  }

  update(id: string) {
    return this.users[0];
  }
  delete(id: string) {
    return this.users[0];
  }
  create() {
    return this.users[0];
  }
  findById() {
    return this.users[0];
  }
  login(username: string, password: string) {
    return this.users[0];
  }
}
