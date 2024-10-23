import { PartialType } from '@nestjs/swagger';
import { CreateVacinaTipoDto } from './create-vacina-tipo.dto';

export class UpdateVacinaTipoDto extends PartialType(CreateVacinaTipoDto) {}
