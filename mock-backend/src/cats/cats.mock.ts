import { ICat, ICatActivityData } from '../../../api/cats/cat.interface';
import * as crypto from 'crypto';

const activityColums = ['time', 'playtime', 'feedingTime', 'sleepingTime'];
const morningtimes = Array.from(Array(12).keys()).map(
  (time) => `${time + 1} AM`,
);
const eveningTimes = Array.from(Array(12).keys()).map(
  (time) => `${time + 1} PM`,
);

const createMockTimeData = (): (string | number)[][] => {
  const times = [...morningtimes, ...eveningTimes];
  const data: (string | number)[][] = [];

  times.forEach((value) => {
    data.push([
      value,
      Math.floor(Math.random() * 100) + 1,
      Math.floor(Math.random() * 100) + 1,
      Math.floor(Math.random() * 100) + 1,
    ]);
  });

  return data;
};

export const createActivityData = (): ICatActivityData => {
  return {
    colums: activityColums,
    data: createMockTimeData(),
  };
};

export const catsMock: ICat[] = [
  {
    id: crypto.randomBytes(16).toString('hex'),
    name: 'Pawter Parker',
    housebroken: true,
    age: 12,
    profilePictureUrl: 'http://placekitten.com/300/300',
    activityData: createActivityData(),
  },
  {
    id: crypto.randomBytes(16).toString('hex'),
    name: 'Ben Bengali',
    housebroken: false,
    age: 3,
    profilePictureUrl: 'http://placekitten.com/g/300/300',
    activityData: createActivityData(),
  },
  {
    id: crypto.randomBytes(16).toString('hex'),
    name: 'Porta Purrica',
    housebroken: true,
    age: 6,
    profilePictureUrl: 'http://placekitten.com/300/300',
    activityData: createActivityData(),
  },
];
