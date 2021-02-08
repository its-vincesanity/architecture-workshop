import { ICat, ICatActivityData } from './cat.interface';

const activityColums = ['time', 'playtime', 'feedingTime', 'sleepingTime'];
const morningtimes = Array.from(Array(12).keys()).map(
    (time) => `${time + 1} AM`,
);
const eveningTimes = Array.from(Array(12).keys()).map(
    (time) => `${time + 1} PM`,
);

const createId = (): string => Math.random().toString(36).substr(2, 9); 

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

const createActivityData = (): ICatActivityData => {
    return {
        colums: activityColums,
        data: createMockTimeData(),
    };
};

export const MCats: ICat[] = [{
    id: createId(),
    name: 'Pawter Parker',
    housebroken: true,
    age: 12,
    profilePictureUrl: 'http://placekitten.com/300/300',
    activityData: createActivityData(),
}, {
    id: createId(),
    name: 'Ben Bengali',
    housebroken: true,
    age: 3,
    profilePictureUrl: 'http://placekitten.com/g/300/300',
    activityData: createActivityData(),
}, {
    id: createId(),
    name: 'Porta Purrica',
    housebroken: true,
    age: 6,
    profilePictureUrl: 'http://placekitten.com/300/300',
    activityData: createActivityData(),
}];
