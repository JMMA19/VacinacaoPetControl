import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters, Query } from '@nestjs/common';
import { VacinaService } from './vacina.service';
import { AllExceptionsFilter } from 'src/_filters/all-exceptions.filter';
import { petFiltro } from 'src/pet/interfaces/pet.filter';
import { PaginationMetadataDto } from 'src/util/interfaces/pagination-metadata.dto';
import { ApiResponse } from '@nestjs/swagger';
import { CreateVacinaDto } from './dto/create-vacina.dto';



@UseFilters(AllExceptionsFilter)
@Controller('vacina')
export class VacinaController {
  constructor(private readonly vacinaService: VacinaService) {}

  @Post()
  @ApiResponse({status: 200})
  create(@Body() createVacinaDto: CreateVacinaDto) {
    return this.vacinaService.create(createVacinaDto);
  }

  @Get()
  findAll(@Query() filter: petFiltro, @Query() pageOptions: PaginationMetadataDto) {
    return this.vacinaService.findAll(filter, pageOptions);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vacinaService.findOne(+id);
  }

}
