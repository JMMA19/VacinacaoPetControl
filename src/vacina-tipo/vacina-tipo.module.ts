import { Module } from '@nestjs/common';
import { VacinaTipoService } from './vacina-tipo.service';
import { VacinaTipoController } from './vacina-tipo.controller';
import { petProviders } from './providers/vacina-tipo.providers';

@Module({
  controllers: [VacinaTipoController],
  providers: [VacinaTipoService, ...petProviders],
  exports: [...petProviders, VacinaTipoService],
})
export class VacinaTipoModule {}
