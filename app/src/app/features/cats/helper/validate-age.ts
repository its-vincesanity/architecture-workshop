import { CAT_CONSTANTS } from '../cats.contstants';

export const validateAge = (age: number): number => {
    if (age > CAT_CONSTANTS.MAX_AGE) {
        age = CAT_CONSTANTS.MAX_AGE;
    } else if (age < CAT_CONSTANTS.MIN_AGE) {
        age = CAT_CONSTANTS.MIN_AGE;
    }
    return age;
};
