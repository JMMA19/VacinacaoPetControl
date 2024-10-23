import { Module } from '@nestjs/common';
import { VacinaService } from './vacina.service';
import { VacinaController } from './vacina.controller';
import { vacinaProviders } from './providers/vacina.providers';
import { PetModule } from 'src/pet/pet.module';

@Module({
  imports: [PetModule],
  controllers: [VacinaController],
  providers: [VacinaService, ...vacinaProviders],
  exports: [...vacinaProviders, VacinaService],
})
export class VacinaModule {}
