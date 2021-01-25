import {
  Body,
  Controller,
  Delete,
  Get,
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
    return await this.catsService.getCat(param.id);
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
