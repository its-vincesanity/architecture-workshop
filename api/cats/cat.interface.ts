
export interface ICat {
    id: string;
    name: string;
    housebroken: boolean;
    age: number;
    profilePictureUrl: string | null;
    activityData: ICatActivityData;
}

export interface ICatActivityData {
    colums: string[];
    data: (string | number)[][];
}
