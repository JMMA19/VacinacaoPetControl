import { Connection } from 'typeorm';
import { Vacina } from '../entity/vacina.entity';


export const vacinaProviders = [
  {
    provide: 'VACINA_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Vacina),
    inject: ['DATABASE_CONNECTION'],
  },
];