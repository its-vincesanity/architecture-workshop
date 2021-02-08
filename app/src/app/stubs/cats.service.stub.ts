import { of } from 'rxjs';
import { ICat } from '../../../../api/cats/cat.interface';
import { MCats } from '../../../../api/cats/cats.mock';

export const CatsServiceStub = {
    getAll: () => of(MCats),
    getOne: (id: string) => of(MCats.find(cat => cat.id === id)),
    add: (cat: ICat) => of(cat),
    update: (cat: ICat) => of(cat),
    delete: (_: ICat) => of(),
};
