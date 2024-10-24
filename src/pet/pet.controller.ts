import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters, Query } from '@nestjs/common';
import { PetService } from './pet.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { AllExceptionsFilter } from 'src/_filters/all-exceptions.filter';
import { ApiResponse } from '@nestjs/swagger';
import { petFiltro } from './interfaces/pet.filter';
import { PaginationMetadataDto } from 'src/util/interfaces/pagination-metadata.dto';

@UseFilters(AllExceptionsFilter)
@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Post()
  @ApiResponse({status: 200})
  create(@Body() createPetDto: CreatePetDto) {
    return this.petService.create(createPetDto);
  }

  @Get()
  findAll(@Query() filter: petFiltro, @Query() pageOptions: PaginationMetadataDto) {
    return this.petService.findAll(filter, pageOptions);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
    return this.petService.update(+id, updatePetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petService.remove(+id);
  }
}
