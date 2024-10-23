import { Connection } from 'typeorm';
import { Pet } from '../entity/pet.entity';


export const petProviders = [
  {
    provide: 'PET_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Pet),
    inject: ['DATABASE_CONNECTION'],
  },
];