import { Injectable } from '@nestjs/common';
import { catsMock } from '../cats.mock';
import { delay } from '../../../config/config.json';
import { ICat } from '../../../../api/cats/cat.interface';

@Injectable()
export class CatsService {
  private cats = catsMock;

  public async getCats(): Promise<ICat[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.cats);
      }, delay);
    });
  }

  public async getCat(id: string): Promise<ICat> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.cats.find((cat) => cat.id === id));
      }, delay);
    });
  }

  public async addCat(cat: ICat): Promise<ICat> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.cats.push(cat);
        resolve(cat);
      }, delay);
    });
  }

  public async updateCat(id: string, catUpdate: ICat): Promise<ICat> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.cats = this.cats.map((cat) => {
          if (cat.id === id) {
            cat = catUpdate;
          }
          return cat;
        });
        resolve(catUpdate);
      }, delay);
    });
  }

  public async deleteCat(catId: string): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.cats = this.cats.filter((cat) => cat.id !== catId);
        resolve();
      }, delay);
    });
  }
}
