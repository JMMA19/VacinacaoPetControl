import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { FindManyOptions, Like, Repository } from 'typeorm';
import { Pet } from './entity/pet.entity';
import { UsersService } from 'src/users/services/users.service';
import { petFiltro } from './interfaces/pet.filter';
import { PaginationMetadataDto } from 'src/util/interfaces/pagination-metadata.dto';

@Injectable()
export class PetService {

  constructor(
    @Inject('PET_REPOSITORY')
    private repository: Repository<Pet>,
    private userService: UsersService
) { }

  async create(createPetDto: CreatePetDto) {
    try {
      let tutor = await this.userService.findById(createPetDto.tutor);
      createPetDto.tutor = tutor;
      this.repository.save(createPetDto);
      return createPetDto;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(filter: petFiltro, pageOptions : PaginationMetadataDto) {
    const whereClause: any = {};

    if (filter.id) {
      whereClause.id = filter.id;
    }

    if (filter.tutor) {
      whereClause.tutor = { id: filter.tutor };  // Modificado para atribuir o ID diretamente
    }

    let parameters: FindManyOptions<Pet> = { 
        where: whereClause,
        order: { nome: "ASC" },
        take: pageOptions.itemsPerPage ? pageOptions.itemsPerPage : 9999
    };

    return this.repository.find(parameters);
}
  
  

  findOne(id: any) {
    return this.repository.findOne({ where: { id: id } });
  }

  update(id: number, updatePetDto: UpdatePetDto) {
    return `This action updates a #${id} pet`;
  }

  remove(id: number) {
    return `This action removes a #${id} pet`;
  }
}
