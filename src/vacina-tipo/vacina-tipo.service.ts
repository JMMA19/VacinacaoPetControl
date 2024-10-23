import { Inject, Injectable } from '@nestjs/common';
import { UpdateVacinaTipoDto } from './dto/update-vacina-tipo.dto';
import { Repository } from 'typeorm';
import { VacinaTipo } from './entity/vacina-tipo.entity';

@Injectable()
export class VacinaTipoService {

  constructor(
    @Inject('VACINA-TIPO_REPOSITORY')
    private repository: Repository<VacinaTipo>,
) { }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} vacinaTipo`;
  }

  update(id: number, updateVacinaTipoDto: UpdateVacinaTipoDto) {
    return `This action updates a #${id} vacinaTipo`;
  }

  remove(id: number) {
    return `This action removes a #${id} vacinaTipo`;
  }
}
