import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ICat } from '../../../../api/cats/cat.interface';
import { CatsService } from '../services/cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async getAll(): Promise<ICat[]> {
    return await this.catsService.getCats();
  }

  @Get(':id')
  async getOne(@Param() param: { id: string }): Promise<ICat> {
    const cat = await this.catsService.getCat(param.id);
    if (cat === undefined) {
      throw new HttpException(
        `Cat with id ${param.id} could not be found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return cat;
  }

  @Put()
  async add(@Body() cat: ICat): Promise<ICat> {
    return await this.catsService.addCat(cat);
  }

  @Post(':id')
  async update(
    @Body() cat: ICat,
    @Param() param: { id: string },
  ): Promise<ICat> {
    return await this.catsService.updateCat(param.id, cat);
  }

  @Delete(':id')
  async delete(@Param() param: { id: string }): Promise<void> {
    return await this.catsService.deleteCat(param.id);
  }
}
