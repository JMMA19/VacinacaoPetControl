import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters } from '@nestjs/common';
import { VacinaTipoService } from './vacina-tipo.service';
import { CreateVacinaTipoDto } from './dto/create-vacina-tipo.dto';
import { UpdateVacinaTipoDto } from './dto/update-vacina-tipo.dto';
import { AllExceptionsFilter } from 'src/_filters/all-exceptions.filter';
import { ApiResponse } from '@nestjs/swagger';

@UseFilters(AllExceptionsFilter)
@Controller('vacina-tipo')
export class VacinaTipoController {
  constructor(private readonly vacinaTipoService: VacinaTipoService) {}

  @Get()
  @ApiResponse({status: 200})
  findAll() {
    return this.vacinaTipoService.findAll();
  }
}
