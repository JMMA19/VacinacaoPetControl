import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateVacinaDto } from './dto/create-vacina.dto';
import { UpdateVacinaDto } from './dto/update-vacina.dto';
import { Vacina } from './entity/vacina.entity';
import { FindManyOptions, Repository } from 'typeorm';
import { Pet } from 'src/pet/entity/pet.entity';
import { petFiltro } from 'src/pet/interfaces/pet.filter';
import { PaginationMetadataDto } from 'src/util/interfaces/pagination-metadata.dto';
import { PetService } from 'src/pet/pet.service';

@Injectable()
export class VacinaService {
 
  constructor(
    @Inject('VACINA_REPOSITORY')
    private repository: Repository<Vacina>,
    private petService: PetService,
) { }

  async create(createVacinaDto: CreateVacinaDto) {
   try {
      let pet = await this.petService.findOne(createVacinaDto.pet);
      createVacinaDto.pet = pet;
      this.repository.save(createVacinaDto);
      return createVacinaDto;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
}


async findAll(filter: petFiltro, pageOptions : PaginationMetadataDto) {
  const whereClause: any = {};

  if (filter.id) {
    whereClause.pet = { id: filter.id };  // Modificado para atribuir o ID diretamente
  }


  let parameters: FindManyOptions<Vacina> = { 
      where: whereClause,
      order: { tipo: "ASC" },
      take: pageOptions.itemsPerPage ? pageOptions.itemsPerPage : 9999
  };

  return this.repository.find(parameters);
}
  findOne(id: number) {
    return `This action returns a #${id} vacina`;
  }

  update(id: number, updateVacinaDto: UpdateVacinaDto) {
    return `This action updates a #${id} vacina`;
  }

  remove(id: number) {
    return `This action removes a #${id} vacina`;
  }
}
