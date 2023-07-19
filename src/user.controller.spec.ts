import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MockService } from './test';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;
  const user = {
    id: '1',
    username: 't',
    password: 'p',
    fullname: 'tt',
    dateOfBirth: new Date('2023-2-14'),
    gender: '1',
  };
  beforeEach(async () => {
    const ModuleRef = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    })
      .overrideProvider(UserService)
      .useClass(MockService)
      .compile();

    userController = ModuleRef.get<UserController>(UserController);
    userService = ModuleRef.get<UserService>(UserService);
  });

  describe('create', () => {
    it('should return an users ', async () => {
      const id = '1';
      const result = user;
      jest.spyOn(userService, 'create').mockImplementation(async () => result);

      expect(await userController.create(user)).toBe(result);
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const result = [
        // {
        //   id: '1',
        //   username: 't',
        //   password: 'p',
        //   fullname: 'tt',
        //   dateOfBirth: new Date('2023-2-14'),
        //   gender: '1',
        // },
      ];
      jest.spyOn(userService, 'findAll').mockImplementation(async () => result);

      expect(await userController.findAll()).toBe(result);
    });
  });
  describe('findById', () => {
    it('should return an users', async () => {
      const id = '1';
      const result = user;
      jest
        .spyOn(userService, 'findById')
        .mockImplementation(async () => result);

      expect(await userController.findById(id)).toBe(result);
    });
  });
  describe('update', () => {
    it('should return an users update', async () => {
      const id = '1';

      const result = user;
      jest.spyOn(userService, 'update').mockImplementation(async () => result);

      expect(await userController.update(id, user)).toBe(result);
    });
  });
  describe('delete', () => {
    it('should return an users delete', async () => {
      const id = '1';
      const result = user;
      jest.spyOn(userService, 'delete').mockImplementation(async () => result);

      expect(await userController.delete(id)).toBe(result);
    });
  });
  // describe('login', () => {
  //   it('should return an users delete', async () => {
  //     const username = 'a';
  //     const password = '1';
  //     const result = user;
  //     jest.spyOn(userService, 'login').mockImplementation(async () => result);

  //     expect(
  //       await userController.login({ username: username, password: password }),
  //     ).toBe(result);
  //   });
  // });
});
