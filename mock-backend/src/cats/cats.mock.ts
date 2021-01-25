import { ICat } from '../../../api/cats/cat.interface';
import * as crypto from 'crypto';

export const catsMock: ICat[] = [
  {
    id: crypto.randomBytes(16).toString('hex'),
    name: 'Pawter Parker',
    housebroken: true,
    age: 12,
    profilePictureUrl: 'http://placekitten.com/300/300',
  },
  {
    id: crypto.randomBytes(16).toString('hex'),
    name: 'Ben Bengali',
    housebroken: false,
    age: 3,
    profilePictureUrl: 'http://placekitten.com/g/300/300',
  },
  {
    id: crypto.randomBytes(16).toString('hex'),
    name: 'Porta Purrica',
    housebroken: true,
    age: 6,
    profilePictureUrl: 'http://placekitten.com/300/300',
  },
];
