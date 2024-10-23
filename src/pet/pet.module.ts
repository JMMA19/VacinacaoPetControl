import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';
import { petProviders } from './providers/pet.providers';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [PetController],
  providers: [PetService, ...petProviders],
  exports: [...petProviders, PetService],
})
export class PetModule {}