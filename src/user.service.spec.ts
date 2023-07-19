import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { ModuleRef } from '@nestjs/core';

describe('UserService', () => {
  let userService: UserService;
  let userModel: Model<User>;
  const user = {
    id: '1',
    username: 't',
    password: 'p',
    fullname: 'tt',
    dateOfBirth: new Date('2023-2-14'),
    gender: '1',
  };

  const productMockRepository = {
    find: () => {
      return { exec: jest.fn(() => {}) };
    },
    findAll: () => {
      return { exec: jest.fn(() => {}) };
    },
    create: jest.fn(() => {}),
    findByIdAndUpdate: () => {
      return { exec: jest.fn(() => {}) };
    },
  };

  beforeEach(async () => {
    const ModuleRef = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getModelToken('User'),
          useValue: productMockRepository,
        },
      ],
    }).compile();

    userService = ModuleRef.get<UserService>(UserService);
    userModel = ModuleRef.get<Model<UserDocument>>(getModelToken('User'));
  });

  describe('create', () => {
    it('should return an users ', async () => {
      const id = '1';
      const result = user;
      jest.spyOn(userService, 'create').mockImplementation(async () => result);

      expect(await userService.create(user)).toBe(result);
    });
  });
});
